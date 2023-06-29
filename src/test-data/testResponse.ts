export const inProgress = {
  apiVersion: "v1",
  items: [
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "Workflow",
      metadata: {
        annotations: {
          "workflows.argoproj.io/pod-name-format": "v2",
        },
        creationTimestamp: "2023-06-27T21:41:33Z",
        generateName: "test-workflow-",
        generation: 3,
        labels: {
          "backstage.io/kubernetes-id": "backstage",
          env: "dev",
          my: "label",
          "workflows.argoproj.io/phase": "Running",
        },
        name: "test-workflow-f49nr",
        namespace: "default",
        resourceVersion: "44977391",
        uid: "188b33ab-c877-4e04-901c-32babece9573",
      },
      spec: {
        arguments: {
          parameters: [
            {
              name: "message",
              value: "from workflow",
            },
          ],
        },
        workflowTemplateRef: {
          name: "workflow-template-whalesay-template",
        },
      },
      status: {
        artifactGCStatus: {
          notSpecified: true,
        },
        artifactRepositoryRef: {
          artifactRepository: {},
          default: true,
        },
        conditions: [
          {
            status: "True",
            type: "PodRunning",
          },
        ],
        finishedAt: null,
        nodes: {
          "test-workflow-f49nr": {
            children: ["test-workflow-f49nr-1432144569"],
            displayName: "test-workflow-f49nr",
            finishedAt: null,
            id: "test-workflow-f49nr",
            inputs: {
              parameters: [
                {
                  name: "message",
                  value: "from workflow",
                },
              ],
            },
            name: "test-workflow-f49nr",
            phase: "Running",
            progress: "1/2",
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "whalesay-template",
            templateScope: "local/",
            type: "Steps",
          },
          "test-workflow-f49nr-1432144569": {
            boundaryID: "test-workflow-f49nr",
            children: [
              "test-workflow-f49nr-1588075630",
              "test-workflow-f49nr-2771663768",
            ],
            displayName: "[0]",
            finishedAt: null,
            id: "test-workflow-f49nr-1432144569",
            name: "test-workflow-f49nr[0]",
            phase: "Running",
            progress: "1/2",
            startedAt: "2023-06-27T21:41:33Z",
            templateScope: "local/",
            type: "StepGroup",
          },
          "test-workflow-f49nr-1588075630": {
            boundaryID: "test-workflow-f49nr",
            displayName: "whalesay3",
            finishedAt: "2023-06-27T21:41:37Z",
            hostNodeName: "ip-192-168-10-135.us-west-2.compute.internal",
            id: "test-workflow-f49nr-1588075630",
            inputs: {
              parameters: [
                {
                  name: "message",
                  value: "from workflow",
                },
              ],
            },
            name: "test-workflow-f49nr[0].whalesay3",
            outputs: {
              exitCode: "0",
            },
            phase: "Succeeded",
            progress: "1/1",
            resourcesDuration: {
              cpu: 4,
              memory: 4,
            },
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "whalesay-template-3",
            templateScope: "local/",
            type: "Pod",
          },
          "test-workflow-f49nr-2771663768": {
            boundaryID: "test-workflow-f49nr",
            displayName: "sleep",
            finishedAt: null,
            hostNodeName: "ip-192-168-5-156.us-west-2.compute.internal",
            id: "test-workflow-f49nr-2771663768",
            name: "test-workflow-f49nr[0].sleep",
            phase: "Running",
            progress: "0/1",
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "sleep",
            templateScope: "local/",
            type: "Pod",
          },
        },
        phase: "Running",
        progress: "1/2",
        resourcesDuration: {
          cpu: 4,
          memory: 4,
        },
        startedAt: "2023-06-27T21:41:33Z",
        storedTemplates: {
          "namespaced/workflow-template-whalesay-template/sleep": {
            container: {
              args: ["600"],
              command: ["sleep"],
              image: "docker/whalesay",
              name: "",
              resources: {},
            },
            inputs: {},
            metadata: {},
            name: "sleep",
            outputs: {},
          },
          "namespaced/workflow-template-whalesay-template/whalesay-template": {
            inputs: {
              parameters: [
                {
                  name: "message",
                },
              ],
            },
            metadata: {},
            name: "whalesay-template",
            outputs: {},
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
                  arguments: {},
                  name: "sleep",
                  template: "sleep",
                },
              ],
            ],
          },
          "namespaced/workflow-template-whalesay-template/whalesay-template-3":
            {
              container: {
                args: ["{{inputs.parameters.message}}"],
                command: ["cowsay"],
                image: "docker/whalesay",
                name: "",
                resources: {},
              },
              inputs: {
                parameters: [
                  {
                    name: "message",
                  },
                ],
              },
              metadata: {},
              name: "whalesay-template-3",
              outputs: {},
            },
        },
        storedWorkflowTemplateSpec: {
          arguments: {
            parameters: [
              {
                name: "message",
                value: "from workflow",
              },
            ],
          },
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
              metadata: {},
              name: "whalesay-template",
              outputs: {},
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
                    arguments: {},
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
                name: "",
                resources: {},
              },
              inputs: {},
              metadata: {},
              name: "sleep",
              outputs: {},
            },
            {
              container: {
                args: ["{{inputs.parameters.message}}"],
                command: ["cowsay"],
                image: "docker/whalesay",
                name: "",
                resources: {},
              },
              inputs: {
                parameters: [
                  {
                    name: "message",
                  },
                ],
              },
              metadata: {},
              name: "whalesay-template-3",
              outputs: {},
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
          workflowTemplateRef: {
            name: "workflow-template-whalesay-template",
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

export const empty = {
  apiVersion: "v1",
  items: [],
  kind: "List",
  metadata: {
    resourceVersion: "",
  },
};

export const mixResponse = {
  apiVersion: "v1",
  items: [
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "Workflow",
      metadata: {
        annotations: {
          "workflows.argoproj.io/pod-name-format": "v2",
        },
        creationTimestamp: "2023-06-27T21:41:33Z",
        generateName: "test-workflow-",
        generation: 3,
        labels: {
          "backstage.io/kubernetes-id": "backstage",
          env: "dev",
          my: "label",
          "workflows.argoproj.io/phase": "Running",
        },
        name: "test-workflow-f49nr",
        namespace: "default",
        resourceVersion: "44977391",
        uid: "188b33ab-c877-4e04-901c-32babece9573",
      },
      spec: {
        arguments: {
          parameters: [
            {
              name: "message",
              value: "from workflow",
            },
          ],
        },
        workflowTemplateRef: {
          name: "workflow-template-whalesay-template",
        },
      },
      status: {
        artifactGCStatus: {
          notSpecified: true,
        },
        artifactRepositoryRef: {
          artifactRepository: {},
          default: true,
        },
        conditions: [
          {
            status: "True",
            type: "PodRunning",
          },
        ],
        finishedAt: null,
        nodes: {
          "test-workflow-f49nr": {
            children: ["test-workflow-f49nr-1432144569"],
            displayName: "test-workflow-f49nr",
            finishedAt: null,
            id: "test-workflow-f49nr",
            inputs: {
              parameters: [
                {
                  name: "message",
                  value: "from workflow",
                },
              ],
            },
            name: "test-workflow-f49nr",
            phase: "Running",
            progress: "1/2",
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "whalesay-template",
            templateScope: "local/",
            type: "Steps",
          },
          "test-workflow-f49nr-1432144569": {
            boundaryID: "test-workflow-f49nr",
            children: [
              "test-workflow-f49nr-1588075630",
              "test-workflow-f49nr-2771663768",
            ],
            displayName: "[0]",
            finishedAt: null,
            id: "test-workflow-f49nr-1432144569",
            name: "test-workflow-f49nr[0]",
            phase: "Running",
            progress: "1/2",
            startedAt: "2023-06-27T21:41:33Z",
            templateScope: "local/",
            type: "StepGroup",
          },
          "test-workflow-f49nr-1588075630": {
            boundaryID: "test-workflow-f49nr",
            displayName: "whalesay3",
            finishedAt: "2023-06-27T21:41:37Z",
            hostNodeName: "ip-192-168-10-135.us-west-2.compute.internal",
            id: "test-workflow-f49nr-1588075630",
            inputs: {
              parameters: [
                {
                  name: "message",
                  value: "from workflow",
                },
              ],
            },
            name: "test-workflow-f49nr[0].whalesay3",
            outputs: {
              exitCode: "0",
            },
            phase: "Succeeded",
            progress: "1/1",
            resourcesDuration: {
              cpu: 4,
              memory: 4,
            },
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "whalesay-template-3",
            templateScope: "local/",
            type: "Pod",
          },
          "test-workflow-f49nr-2771663768": {
            boundaryID: "test-workflow-f49nr",
            displayName: "sleep",
            finishedAt: null,
            hostNodeName: "ip-192-168-5-156.us-west-2.compute.internal",
            id: "test-workflow-f49nr-2771663768",
            name: "test-workflow-f49nr[0].sleep",
            phase: "Running",
            progress: "0/1",
            startedAt: "2023-06-27T21:41:33Z",
            templateName: "sleep",
            templateScope: "local/",
            type: "Pod",
          },
        },
        phase: "Running",
        progress: "1/2",
        resourcesDuration: {
          cpu: 4,
          memory: 4,
        },
        startedAt: "2023-06-27T21:41:33Z",
        storedTemplates: {
          "namespaced/workflow-template-whalesay-template/sleep": {
            container: {
              args: ["600"],
              command: ["sleep"],
              image: "docker/whalesay",
              name: "",
              resources: {},
            },
            inputs: {},
            metadata: {},
            name: "sleep",
            outputs: {},
          },
          "namespaced/workflow-template-whalesay-template/whalesay-template": {
            inputs: {
              parameters: [
                {
                  name: "message",
                },
              ],
            },
            metadata: {},
            name: "whalesay-template",
            outputs: {},
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
                  arguments: {},
                  name: "sleep",
                  template: "sleep",
                },
              ],
            ],
          },
          "namespaced/workflow-template-whalesay-template/whalesay-template-3":
            {
              container: {
                args: ["{{inputs.parameters.message}}"],
                command: ["cowsay"],
                image: "docker/whalesay",
                name: "",
                resources: {},
              },
              inputs: {
                parameters: [
                  {
                    name: "message",
                  },
                ],
              },
              metadata: {},
              name: "whalesay-template-3",
              outputs: {},
            },
        },
        storedWorkflowTemplateSpec: {
          arguments: {
            parameters: [
              {
                name: "message",
                value: "from workflow",
              },
            ],
          },
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
              metadata: {},
              name: "whalesay-template",
              outputs: {},
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
                    arguments: {},
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
                name: "",
                resources: {},
              },
              inputs: {},
              metadata: {},
              name: "sleep",
              outputs: {},
            },
            {
              container: {
                args: ["{{inputs.parameters.message}}"],
                command: ["cowsay"],
                image: "docker/whalesay",
                name: "",
                resources: {},
              },
              inputs: {
                parameters: [
                  {
                    name: "message",
                  },
                ],
              },
              metadata: {},
              name: "whalesay-template-3",
              outputs: {},
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
          workflowTemplateRef: {
            name: "workflow-template-whalesay-template",
          },
        },
      },
    },
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "Workflow",
      metadata: {
        creationTimestamp: "2023-06-22T23:03:08Z",
        generateName: "test-workflow-",
        generation: 2,
        labels: {
          "backstage.io/kubernetes-id": "backstage",
          "workflows.argoproj.io/completed": "true",
          "workflows.argoproj.io/phase": "Failed",
        },
        name: "test-workflow-6z6dc",
        namespace: "default",
        resourceVersion: "43485348",
        uid: "98c95400-061a-4f9f-85ca-b95d4bf2ef2b",
      },
      spec: {
        arguments: {},
      },
      status: {
        conditions: [
          {
            status: "True",
            type: "Completed",
          },
        ],
        finishedAt: "2023-06-22T23:03:08Z",
        message: "cannot unmarshall spec: cannot restore struct from: slice",
        phase: "Failed",
        progress: "0/0",
        startedAt: "2023-06-22T23:03:08Z",
      },
    },
    {
      apiVersion: "argoproj.io/v1alpha1",
      kind: "Workflow",
      metadata: {
        creationTimestamp: "2023-06-21T21:28:37Z",
        generateName: "test-workflow-",
        generation: 2,
        labels: {
          "workflows.argoproj.io/completed": "true",
          "workflows.argoproj.io/phase": "Error",
        },
        name: "test-workflow-2vphn",
        namespace: "default",
        resourceVersion: "43163381",
        uid: "40700bb3-2bce-4080-b0c8-c48033820666",
      },
      spec: {
        arguments: {
          parameters: [
            {
              name: "message",
              value: "from workflow",
            },
          ],
        },
        workflowTemplateRef: {
          name: "workflow-template-whalesay-template",
        },
      },
      status: {
        conditions: [
          {
            status: "True",
            type: "Completed",
          },
        ],
        finishedAt: "2023-06-21T21:28:37Z",
        message:
          'malformed workflow template "default/workflow-template-whalesay-template": cannot convert int64 to string',
        phase: "Error",
        progress: "0/0",
        startedAt: "2023-06-21T21:28:37Z",
      },
    },
  ],
  kind: "List",
  metadata: {
    resourceVersion: "",
  },
};
