import React from "react";
import {
  MockConfigApi,
  MockFetchApi,
  renderInTestApp,
  TestApiProvider,
} from "@backstage/test-utils";
import {
  AnyApiRef,
  configApiRef,
  DiscoveryApi,
  discoveryApiRef,
  fetchApiRef,
} from "@backstage/core-plugin-api";
import { ArgoWorkflowsApi, argoWorkflowsApiRef } from "../../api";
import { KubernetesApi, kubernetesApiRef } from "@backstage/plugin-kubernetes";
import { EntityProvider } from "@backstage/plugin-catalog-react";
import { WorkflowTemplateTable } from "./WorkflowTemplateOverview";
import { simple } from "../../test-data/testResponseWorkflowTemplates";
import { IoArgoprojWorkflowV1alpha1WorkflowTemplateList } from "../../api/generated/api";

const BASE_URL = "https://backstage.io";
const mockConfigApi = new MockConfigApi({
  argoWorkflows: { baseUrl: BASE_URL },
});
const mockDiscoveryApi: jest.Mocked<DiscoveryApi> = {
  getBaseUrl: jest.fn().mockImplementation((id) => {
    return Promise.resolve(`https://backstage.io/${id}`);
  }),
};
const mockKClient: jest.Mocked<KubernetesApi> = {
  getObjectsByEntity: jest.fn(),
  getClusters: jest.fn(),
  getWorkloadsByEntity: jest.fn(),
  getCustomObjectsByEntity: jest.fn(),
  proxy: jest.fn(),
};
const noopFetchApi = new MockFetchApi({ baseImplementation: "none" });
const mockArgoWorkflows: jest.Mocked<ArgoWorkflowsApi> = {
  getWorkflows: jest.fn(),
  getWorkflowTemplates: jest.fn(),
};

const apis: [AnyApiRef, Partial<unknown>][] = [
  [discoveryApiRef, mockDiscoveryApi],
  [kubernetesApiRef, mockKClient],
  [configApiRef, mockConfigApi],
  [fetchApiRef, noopFetchApi],
  [argoWorkflowsApiRef, mockArgoWorkflows],
];

const entity = {
  metadata: {
    namespace: "default",
    annotations: {
      "backstage.io/kubernetes-label-selector": "my=env",
      "backstage.io/kubernetes-namespace": "default",
    },
    name: "my-entity",
  },
  apiVersion: "backstage.io/v1alpha1",
  kind: "Component",
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("WorkflowTemplateTable", () => {
  it("should display workflows without link", async () => {
    jest
      .spyOn(mockArgoWorkflows, "getWorkflowTemplates")
      .mockImplementation(
        (
          _n,
          _ns,
          _l
        ): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> => {
          return Promise.resolve(
            simple as unknown as IoArgoprojWorkflowV1alpha1WorkflowTemplateList
          );
        }
      );
    jest.spyOn(mockConfigApi, "getOptionalString").mockImplementation((_) => {
      return undefined;
    });
    const r = await renderInTestApp(
      <TestApiProvider apis={apis}>
        <EntityProvider entity={entity}>
          <WorkflowTemplateTable />
        </EntityProvider>
      </TestApiProvider>
    );
    const c = r.getByText(simple.items[0].metadata.name);
    expect(c).not.toHaveAttribute("href");
  });

  it("should display workflows wth link", async () => {
    const spyWorkflows = jest
      .spyOn(mockArgoWorkflows, "getWorkflowTemplates")
      .mockImplementation(
        (
          _n,
          _ns,
          _l
        ): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList> => {
          return Promise.resolve(
            simple as unknown as IoArgoprojWorkflowV1alpha1WorkflowTemplateList
          );
        }
      );
    const spyConfigApi = jest
      .spyOn(mockConfigApi, "getOptionalString")
      .mockImplementation((_n) => {
        return `https://backstage.io/`;
      });
    const r = await renderInTestApp(
      <TestApiProvider apis={apis}>
        <EntityProvider entity={entity}>
          <WorkflowTemplateTable data-testid="test" />
        </EntityProvider>
      </TestApiProvider>
    );
    expect(spyWorkflows).toHaveBeenCalledWith(undefined, "default", "my=env");
    expect(spyConfigApi).toHaveBeenCalledWith("argoWorkflows.baseUrl");
    const c = r.getByText(simple.items[0].metadata.name);
    expect(c).toHaveAttribute(
      "href",
      `${BASE_URL}/workflow-templates/default/${simple.items[0].metadata.name}`
    );
  });
});
