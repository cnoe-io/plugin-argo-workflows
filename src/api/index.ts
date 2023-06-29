import { createApiRef } from "@backstage/core-plugin-api";

import { IoArgoprojWorkflowV1alpha1WorkflowList } from "./generated/";

export { ArgoWorkflows } from "./ArgoWorkflows";

export const argoWorkflowsApiRef = createApiRef<ArgoWorkflowsApi>({
  id: "plugin.argoworkflows",
});
export interface ArgoWorkflowsApi {
  getWorkflowsFromK8s(
    clusterName: string,
    namespace: string | undefined,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>;
  getWorkflows(
    clusterName: string | undefined,
    namespace: string | undefined,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>;
  getWorkflowsFromProxy(
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>;
}
