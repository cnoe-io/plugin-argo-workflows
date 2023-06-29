export interface Config {
  /** Optional configurations for the Argo Workflows plugin */
  argoWorkflows: {
    /**
     * The base url of the Argo Workflows installation.
     * @visibility frontend
     */
    baseUrl: string;
  };
}
