import { createApiRef } from "@backstage/core-plugin-api";

import {
  IoArgoprojWorkflowV1alpha1WorkflowList,
  IoArgoprojWorkflowV1alpha1WorkflowTemplateList,
} from "./generated/";

export { ArgoWorkflows } from "./ArgoWorkflows";

export const argoWorkflowsApiRef = createApiRef<ArgoWorkflowsApi>({
  id: "plugin.argoworkflows",
});
export interface ArgoWorkflowsApi {
  getWorkflows(
    clusterName: string | undefined,
    namespace: string | undefined,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowList>;
  getWorkflowTemplates(
    clusterName: string | undefined,
    namespace: string,
    labels: string | undefined
  ): Promise<IoArgoprojWorkflowV1alpha1WorkflowTemplateList>;
}
