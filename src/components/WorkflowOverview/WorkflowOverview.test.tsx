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
import { OverviewTable } from "./WorkflowOverview";
import { inProgress, mixResponse } from "../../test-data/testResponse";
import { IoArgoprojWorkflowV1alpha1WorkflowList } from "../../api/generated/api";

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

describe("WorkflowOverviewComponent", () => {
  it("should display workflows without link", async () => {
    jest
      .spyOn(mockArgoWorkflows, "getWorkflows")
      .mockImplementation(
        (_n, _ns, _l): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> => {
          return Promise.resolve(
            inProgress as unknown as IoArgoprojWorkflowV1alpha1WorkflowList
          );
        }
      );
    jest.spyOn(mockConfigApi, "getOptionalString").mockImplementation((_) => {
      return undefined;
    });
    const r = await renderInTestApp(
      <TestApiProvider apis={apis}>
        <EntityProvider entity={entity}>
          <OverviewTable />
        </EntityProvider>
      </TestApiProvider>
    );
    const c = r.getByText(inProgress.items[0].metadata.name);
    expect(c).not.toHaveAttribute(
      "href",
      `${BASE_URL}/workflows/default/${inProgress.items[0].metadata.name}`
    );
  });

  it("should display workflows wth link", async () => {
    const spyWorkflows = jest
      .spyOn(mockArgoWorkflows, "getWorkflows")
      .mockImplementation(
        (_n, _ns, _l): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> => {
          return Promise.resolve(
            mixResponse as unknown as IoArgoprojWorkflowV1alpha1WorkflowList
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
          <OverviewTable data-testid="test" />
        </EntityProvider>
      </TestApiProvider>
    );
    expect(spyWorkflows).toHaveBeenCalledWith(undefined, "default", "my=env");
    expect(spyConfigApi).toHaveBeenCalledWith("argoWorkflows.baseUrl");
    const c = r.getByText(mixResponse.items[0].metadata.name);
    expect(c).toHaveAttribute(
      "href",
      `${BASE_URL}/workflows/default/${mixResponse.items[0].metadata.name}`
    );
  });
});
