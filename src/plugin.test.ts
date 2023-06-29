import { argoWorkflowsPlugin } from "./plugin";

describe("argo-workflows", () => {
  it("should export plugin", () => {
    expect(argoWorkflowsPlugin).toBeDefined();
  });
});
