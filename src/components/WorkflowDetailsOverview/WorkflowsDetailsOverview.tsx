import { createStyles, makeStyles } from "@material-ui/core";
import { InfoCard, StructuredMetadataTable } from "@backstage/core-components";
import React from "react";
import { IoArgoprojWorkflowV1alpha1Workflow } from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Workflow";
import { renderPhase } from "../component-utils";
import { IoArgoprojWorkflowV1alpha1Arguments } from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Arguments";
import { IoArgoprojWorkflowV1alpha1Outputs } from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Outputs";
import { IoArgoprojWorkflowV1alpha1Artifact } from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Artifact";

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
      padding: "5px",
      gap: "30px",
    },
  })
);

type generateMetadataOutput = {
  workflow: { [key: string]: any };
  inputParameters: { [key: string]: any };
  inputArtifacts: { [key: string]: any };
  outputArtifacts: { [key: string]: any };
  outputParameters: { [key: string]: any };
  exitCode: { [key: string]: any } | undefined;
  result: { [key: string]: any } | undefined;
};

function getArtifact(
  artifact: IoArgoprojWorkflowV1alpha1Artifact
): any | undefined {
  return (
    artifact.from ??
    artifact.fromExpression ??
    artifact.globalName ??
    artifact.path ??
    artifact.artifactory?.url ??
    artifact.azure ??
    artifact.gcs ??
    artifact.git ??
    artifact.hdfs ??
    artifact.http ??
    artifact.s3 ??
    artifact.raw
  );
}

function getParameters(args: IoArgoprojWorkflowV1alpha1Arguments | undefined): {
  inputParams: {};
  inputArtifacts: {};
} {
  const inputParams: { [key: string]: any } = {};
  const inputArtifacts: { [key: string]: any } = {};
  args?.parameters?.forEach((val) => {
    inputParams[val.name] = val.value ?? val.valueFrom;
  });
  args?.artifacts?.forEach((val) => {
    inputArtifacts[val.name] = getArtifact(val);
  });
  return {
    inputParams: inputParams,
    inputArtifacts: inputArtifacts,
  };
}

function getOutputs(outputs: IoArgoprojWorkflowV1alpha1Outputs | undefined): {
  artifacts: {};
  exitCode: {} | undefined;
  parameters: {};
  result: {} | undefined;
} {
  const artifacts: { [key: string]: any } = {};
  outputs?.artifacts?.forEach((val) => {
    artifacts[val.name] = getArtifact(val);
  });
  const parameters: { [key: string]: any } = {};
  outputs?.parameters?.forEach((val) => {
    parameters[val.name] = val.value ?? val.valueFrom;
  });

  return {
    artifacts: artifacts,
    exitCode: outputs?.exitCode ? { exitCode: outputs.exitCode } : undefined,
    parameters: parameters,
    result: outputs?.result ? { result: outputs.result } : undefined,
  };
}

function generateMetadata(
  workflow: IoArgoprojWorkflowV1alpha1Workflow
): generateMetadataOutput {
  const inputs = getParameters(workflow.spec.arguments);
  const output = getOutputs(workflow.status?.outputs);
  const app: { [key: string]: any } = {
    name: workflow.metadata.name,
    namespace: workflow.metadata.namespace,
    status: renderPhase(workflow.status?.phase),
    message: workflow.status?.message ?? "",
  };
  return {
    workflow: app,
    inputArtifacts: inputs.inputArtifacts,
    inputParameters: inputs.inputParams,
    outputArtifacts: output.artifacts,
    outputParameters: output.parameters,
    exitCode: output.exitCode,
    result: output.result,
  };
}

const upperCaseFirstChar = (s: string) => {
  if (s.length > 0) {
    return `${s.charAt(0).toUpperCase()}${s.slice(1)}`;
  }
  return s;
};

export const DrawerOverview = (props: {
  workflow: IoArgoprojWorkflowV1alpha1Workflow;
}) => {
  const data = generateMetadata(props.workflow);
  return (
    <div className={useStyles().content}>
      <InfoCard title="Argo Workflows">
        <StructuredMetadataTable
          metadata={data.workflow}
          options={{ titleFormat: upperCaseFirstChar }}
        />
      </InfoCard>
      {data.exitCode && (
        <InfoCard title="Exit Code">
          <StructuredMetadataTable
            metadata={data.exitCode}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
      {data.result && (
        <InfoCard title="Result">
          <StructuredMetadataTable
            metadata={data.result}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
      {Object.keys(data.inputParameters).length && (
        <InfoCard title="Input Parameters">
          <StructuredMetadataTable
            metadata={data.inputParameters}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
      {Object.keys(data.inputArtifacts).length && (
        <InfoCard title="Input Artifact">
          <StructuredMetadataTable
            metadata={data.inputArtifacts}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
      {Object.keys(data.outputParameters).length && (
        <InfoCard title="Output Parameters">
          <StructuredMetadataTable
            metadata={data.outputParameters}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
      {Object.keys(data.outputArtifacts).length && (
        <InfoCard title="Output Artifacts">
          <StructuredMetadataTable
            metadata={data.outputArtifacts}
            options={{ titleFormat: upperCaseFirstChar }}
          />
        </InfoCard>
      )}
    </div>
  );
};
