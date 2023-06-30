export const simple = {
  apiVersion: "v1",
  items: [
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "WorkflowTemplate",
      metadata: {
        annotations: {
          "kubectl.kubernetes.io/last-applied-configuration":
            '{"apiVersion":"argoproj.io/v1alpha1","kind":"WorkflowTemplate","metadata":{"annotations":{},"name":"workflow-template-whalesay-template","namespace":"default"},"spec":{"entrypoint":"whalesay-template","templates":[{"inputs":{"parameters":[{"name":"message"}]},"name":"whalesay-template","steps":[[{"arguments":{"parameters":[{"name":"message","value":"{{inputs.parameters.message}}"}]},"name":"whalesay3","template":"whalesay-template-3"},{"name":"sleep","template":"sleep"}]]},{"container":{"args":["600"],"command":["sleep"],"image":"docker/whalesay"},"name":"sleep"},{"container":{"args":["{{inputs.parameters.message}}"],"command":["cowsay"],"image":"docker/whalesay"},"inputs":{"parameters":[{"name":"message"}]},"name":"whalesay-template-3"}],"ttlStrategy":{"secondsAfterCompletion":28800},"workflowMetadata":{"labels":{"env":"dev","my":"label"}}}}\n',
        },
        creationTimestamp: "2023-06-26T22:20:33Z",
        generation: 1,
        name: "workflow-template-whalesay-template",
        namespace: "default",
        resourceVersion: "76502835",
        uid: "c2ed5f0a-9093-4cb2-bac5-c9918bb3f8d7",
      },
      spec: {
        entrypoint: "whalesay-template",
        templates: [
          {
            inputs: {
              parameters: [
                {
                  name: "message",
                },
              ],
            },
            name: "whalesay-template",
            steps: [
              [
                {
                  arguments: {
                    parameters: [
                      {
                        name: "message",
                        value: "{{inputs.parameters.message}}",
                      },
                    ],
                  },
                  name: "whalesay3",
                  template: "whalesay-template-3",
                },
                {
                  name: "sleep",
                  template: "sleep",
                },
              ],
            ],
          },
          {
            container: {
              args: ["600"],
              command: ["sleep"],
              image: "docker/whalesay",
            },
            name: "sleep",
          },
          {
            container: {
              args: ["{{inputs.parameters.message}}"],
              command: ["cowsay"],
              image: "docker/whalesay",
            },
            inputs: {
              parameters: [
                {
                  name: "message",
                },
              ],
            },
            name: "whalesay-template-3",
          },
        ],
        ttlStrategy: {
          secondsAfterCompletion: 28800,
        },
        workflowMetadata: {
          labels: {
            env: "dev",
            my: "label",
          },
        },
      },
    },
  ],
  kind: "List",
  metadata: {
    resourceVersion: "",
  },
};
