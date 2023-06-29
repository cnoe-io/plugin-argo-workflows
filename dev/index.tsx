import React from "react";
import { createDevApp } from "@backstage/dev-utils";
import { argoWorkflowsPlugin, ArgoWorkflowsPage } from "../src/plugin";

createDevApp()
  .registerPlugin(argoWorkflowsPlugin)
  .addPage({
    element: <ArgoWorkflowsPage />,
    title: "Root Page",
    path: "/argo-workflows",
  })
  .render();
