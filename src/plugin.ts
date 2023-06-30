import {
  createApiFactory,
  createPlugin,
  createRoutableExtension,
  discoveryApiRef,
  fetchApiRef,
} from "@backstage/core-plugin-api";
import { Entity } from "@backstage/catalog-model";

import { rootRouteRef } from "./routes";
import { ArgoWorkflows, argoWorkflowsApiRef } from "./api";
import { kubernetesApiRef } from "@backstage/plugin-kubernetes";

export const CLUSTER_NAME_ANNOTATION = "argo-workflows/cluster-name";
export const K8S_LABEL_SELECTOR_ANNOTATION =
  "backstage.io/kubernetes-label-selector";
export const K8S_NAMESPACE_ANNOTATION = "backstage.io/kubernetes-namespace";
export const ARGO_WORKFLOWS_LABEL_SELECTOR_ANNOTATION =
  "argo-workflows/label-selector";
export const argoWorkflowsPlugin = createPlugin({
  id: "argo-workflows",
  routes: {
    root: rootRouteRef,
  },
  apis: [
    createApiFactory({
      api: argoWorkflowsApiRef,
      deps: {
        discoveryApi: discoveryApiRef,
        kubernetesApi: kubernetesApiRef,
        fetchApi: fetchApiRef,
      },
      factory: ({ discoveryApi, kubernetesApi, fetchApi }) =>
        new ArgoWorkflows(discoveryApi, kubernetesApi, fetchApi),
    }),
  ],
});

export const ArgoWorkflowsPage = argoWorkflowsPlugin.provide(
  createRoutableExtension({
    name: "ArgoWorkflowsPage",
    component: () =>
      import("./components/Overview").then((m) => m.ArgoWorkflowsOverviewPage),
    mountPoint: rootRouteRef,
  })
);

export const EntityArgoWorkflowsOverviewCard = argoWorkflowsPlugin.provide(
  createRoutableExtension({
    name: "ArgoWorkflowsOverviewCard",
    component: () =>
      import("./components/Overview").then((m) => m.ArgoWorkflowsOverviewCard),
    mountPoint: rootRouteRef,
  })
);

export const EntityArgoWorkflowsTemplateOverviewCard =
  argoWorkflowsPlugin.provide(
    createRoutableExtension({
      name: "ArgoWorkflowsTemplatesOverviewCard",
      component: () =>
        import("./components/Overview").then(
          (m) => m.ArgoWorkflowsTemplatesOverviewCard
        ),
      mountPoint: rootRouteRef,
    })
  );

export const isArgoWorkflowsAvailable = (entity: Entity) =>
  Boolean(
    entity?.metadata.annotations?.[ARGO_WORKFLOWS_LABEL_SELECTOR_ANNOTATION]
  ) || Boolean(entity?.metadata.annotations?.[K8S_LABEL_SELECTOR_ANNOTATION]);
