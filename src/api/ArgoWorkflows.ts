import { DiscoveryApi, FetchApi } from "@backstage/core-plugin-api";
import { KubernetesApi } from "@backstage/plugin-kubernetes";
import {
  IoArgoprojWorkflowV1alpha1WorkflowList,
  IoArgoprojWorkflowV1alpha1WorkflowTemplateList,
} from "./generated";
import { ArgoWorkflowsApi } from "./index";

const API_VERSION = "argoproj.io/v1alpha1";
const WORKFLOW_PLURAL = "workflows";
const DEFAULT_WORKFLOW_PROXY = "/argo-workflows/api";
const API_LABEL_SELECTOR = "listOptions.labelSelector";
const API_TIMEOUT = "listOptions.timeoutSeconds";
const K8s_API_TIMEOUT = "timeoutSeconds";

export class ArgoWorkflows implements ArgoWorkflowsApi {
  private discoveryApi: DiscoveryApi;
  private kubernetesApi: KubernetesApi;
  private fetchApi: FetchApi;

  constructor(
    discoveryApi: DiscoveryApi,
    kubernetesApi: KubernetesApi,
    fetchApi: FetchApi
  ) {
    this.discoveryApi = discoveryApi;
    this.kubernetesApi = kubernetesApi;
    this.fetchApi = fetchApi;
  }

  async getWorkflowsFromK8s(
    clusterName: string | undefined,
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
    const ns = namespace !== undefined ? namespace : "default";
    const path = `/apis/${API_VERSION}/namespaces/${ns}/${WORKFLOW_PLURAL}`;
    const query = new URLSearchParams({
      [K8s_API_TIMEOUT]: "30",
    });
    if (labels) {
      query.set("labelSelector", labels);
    }
    // need limits and pagination
    const resp = await this.kubernetesApi.proxy({
      clusterName:
        clusterName !== undefined ? clusterName : await this.getFirstCluster(),
      path: `${path}?${query.toString()}`,
    });

    if (!resp.ok) {
      return Promise.reject(
        `failed to fetch resources: ${resp.status}, ${
          resp.statusText
        }, ${await resp.text()}`
      );
    }
    // need validation
    return JSON.parse(
      await resp.text()
    ) as IoArgoprojWorkflowV1alpha1WorkflowList;
  }

  getWorkflows(
    clusterName: string | undefined,
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
    if (clusterName) {
      return this.getWorkflowsFromK8s(clusterName, namespace, labels);
    }
    return this.getWorkflowsFromProxy(namespace, labels);
  }

  async getWorkflowTemplates(
    clusterName: string | undefined,
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> {
    if (clusterName) {
      return Promise.reject("t");
    }
    return this.getWorkflowTemplatesFromProxy(namespace, labels);
  }

  async getWorkflowsFromProxy(
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> {
    const path = `/api/v1/workflows/${namespace}`;
    const resp = await this.fetchFromPath(path, labels);
    return await checkAndReturn<IoArgoprojWorkflowV1alpha1WorkflowTemplateList>(
      resp
    );
  }

  async getWorkflowTemplatesFromProxy(
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> {
    const path = `/api/v1/workflow-templates/${namespace}`;

    const resp = await this.fetchFromPath(path, labels);
    return await checkAndReturn<IoArgoprojWorkflowV1alpha1WorkflowTemplateList>(
      resp
    );
  }

  async getFirstCluster(): Promise<string> {
    const clusters = await this.kubernetesApi.getClusters();
    if (clusters.length > 0) {
      return Promise.resolve(clusters[0].name);
    }
    return Promise.reject("no clusters found in configuration");
  }

  async fetchFromPath(
    path: string,
    labels: string | undefined
  ): Promise<Response> {
    const proxyUrl = await this.discoveryApi.getBaseUrl("proxy");
    const url = `${proxyUrl}${DEFAULT_WORKFLOW_PROXY}${path}`;
    const query = new URLSearchParams({ [API_TIMEOUT]: "30" });
    if (labels) {
      query.set(API_LABEL_SELECTOR, labels);
    }
    return this.fetchApi.fetch(`${url}?${query.toString()}`, {});
  }
}

async function checkAndReturn<T>(resp: Response): Promise<T> {
  if (!resp.ok) {
    return Promise.reject(
      `failed to fetch resources: ${resp.status}, ${
        resp.statusText
      }, ${await resp.text()}`
    );
  }
  // need validation
  return Promise.resolve(JSON.parse(await resp.text()) as T);
}
