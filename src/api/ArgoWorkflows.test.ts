import { DiscoveryApi } from "@backstage/core-plugin-api";
import { ArgoWorkflows } from "./ArgoWorkflows";
import { KubernetesApi } from "@backstage/plugin-kubernetes";
import { MockFetchApi } from "@backstage/test-utils";
import { FrontendHostDiscovery } from "@backstage/core-app-api";
import { UserIdentity } from "@backstage/core-components";
import { inProgress } from "../test-data/testResponse";

describe("ArgoWorkflowsClient", () => {
  const mockDiscoveryApi: jest.Mocked<DiscoveryApi> = {
    getBaseUrl: jest.fn().mockImplementation((id) => {
      return Promise.resolve(`https://backstage.io/${id}`);
    }),
  };
  const noopFetchApi = new MockFetchApi({ baseImplementation: "none" });

  const mockKClient: jest.Mocked<KubernetesApi> = {
    getObjectsByEntity: jest.fn(),
    getClusters: jest.fn(),
    getWorkloadsByEntity: jest.fn(),
    getCustomObjectsByEntity: jest.fn(),
    proxy: jest.fn(),
  };

  beforeAll(() => {
    jest
      .spyOn(FrontendHostDiscovery.prototype, "getBaseUrl")
      .mockImplementation((id) => {
        return Promise.resolve(`https://backstage.io/${id}`);
      });
    jest
      .spyOn(UserIdentity.prototype, "getCredentials")
      .mockImplementation(() => {
        return Promise.resolve({ token: "abc" });
      });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("can fetch from k8s", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 200,
      ok: true,
      text: async () => JSON.stringify(inProgress),
    } as Response);

    const a = new ArgoWorkflows(mockDiscoveryApi, mockKClient, noopFetchApi);
    const spy = jest.spyOn(mockKClient, "proxy");
    const resp = await a.getWorkflowsFromK8s("abc", "default", "my=env");
    expect(resp.items.length).toBe(1);
    expect(spy).toHaveBeenCalledWith({
      clusterName: "abc",
      path: "/apis/argoproj.io/v1alpha1/namespaces/default/workflows?timeoutSeconds=30&labelSelector=my%3Denv",
    });
  });
  it("can fetch from default k8s cluster", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 200,
      ok: true,
      text: async () => JSON.stringify(inProgress),
    } as Response);
    mockKClient.getClusters.mockResolvedValue([
      {
        name: "cluster-1",
        authProvider: "provider-1",
      },
    ]);

    const a = new ArgoWorkflows(mockDiscoveryApi, mockKClient, noopFetchApi);
    const spy = jest.spyOn(a, "getFirstCluster");
    const resp = await a.getWorkflowsFromK8s(undefined, "default", "my=env");
    expect(resp.items.length).toBe(1);
    expect(spy).toHaveBeenCalled();
  });
  it("rejects when non-ok status returned", async () => {
    mockKClient.proxy.mockResolvedValue({
      status: 500,
      ok: false,
      statusText: "something went wrong",
      text: async () => "oh no",
    } as Response);

    const a = new ArgoWorkflows(mockDiscoveryApi, mockKClient, noopFetchApi);
    await expect(
      a.getWorkflowsFromK8s("abc", "default", "not used")
    ).rejects.toEqual(
      "failed to fetch resources: 500, something went wrong, oh no"
    );
  });
  it("can get workflow from proxy", async () => {
    const impl = jest.fn().mockResolvedValue({
      status: 200,
      ok: true,
      text: async () => JSON.stringify(inProgress),
    });
    const fetchApi = new MockFetchApi({ baseImplementation: impl });
    const a = new ArgoWorkflows(mockDiscoveryApi, mockKClient, fetchApi);
    const resp = await a.getWorkflowsFromProxy("default", "my=env");
    expect(resp.items.length).toBe(1);
  });
  it("rejects when error is returned", async () => {
    const impl = jest.fn().mockResolvedValue({
      status: 500,
      ok: false,
      statusText: "something went wrong",
      text: async () => "oh no",
    });
    const fetchApi = new MockFetchApi({ baseImplementation: impl });
    const a = new ArgoWorkflows(mockDiscoveryApi, mockKClient, fetchApi);
    await expect(a.getWorkflowsFromProxy("default", "my=env")).rejects.toEqual(
      "failed to fetch resources: 500, something went wrong, oh no"
    );
  });
});
