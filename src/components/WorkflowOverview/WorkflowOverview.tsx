import { configApiRef, useApi } from "@backstage/core-plugin-api";
import { argoWorkflowsApiRef } from "../../api";
import useAsync from "react-use/lib/useAsync";
import {
  Link,
  Progress,
  StatusError,
  StatusOK,
  StatusPending,
  StatusRunning,
  Table,
  TableColumn,
} from "@backstage/core-components";
import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { useEntity } from "@backstage/plugin-catalog-react";
import { IoArgoprojWorkflowV1alpha1WorkflowList } from "../../api/generated/api";
import { getAnnotationValues, trimBaseUrl } from "../utils";

type TableData = {
  id: string;
  name: string;
  namespace: string;
  phase?: JSX.Element;
  progress?: string;
  startedAt?: string;
  finishedAt?: string;
};

export const OverviewTable = () => {
  const { entity } = useEntity();
  const apiClient = useApi(argoWorkflowsApiRef);
  const configApi = useApi(configApiRef);
  const argoWorkflowsBaseUrl = trimBaseUrl(
    configApi.getOptionalString("argoWorkflows.baseUrl")
  );
  const [columnData, setColumnData] = useState([] as TableData[]);
  const { ns, clusterName, labelSelector } = getAnnotationValues(entity);
  const columns: TableColumn[] = [
    {
      title: "Name",
      field: "name",
      render: (data: any | TableData, _): any => {
        if (data && argoWorkflowsBaseUrl) {
          return (
            <Link
              to={`${argoWorkflowsBaseUrl}/workflows/${data.namespace}/${data.name}`}
            >
              {data.name}
            </Link>
          );
        }
        return data.name;
      },
    },
    {
      title: "Phase",
      field: "phase",
    },
    { title: "Progress", field: "progress" },
    {
      title: "StartTime",
      field: "startedAt",
      type: "datetime",
      defaultSort: "desc",
    },
    { title: "EndTime", field: "finishedAt", type: "datetime" },
    { title: "Namespace", field: "namespace", type: "string" },
  ];
  const { value, loading, error } = useAsync(
    async (): Promise<IoArgoprojWorkflowV1alpha1WorkflowList> => {
      return await apiClient.getWorkflows(clusterName, ns, labelSelector);
    }
  );
  useEffect(() => {
    const data = value?.items?.map((val) => {
      let state = {};
      switch (val.status?.phase) {
        case "Running":
          state = <StatusRunning>Running</StatusRunning>;
          break;
        case "Succeeded":
          state = <StatusOK>Succeeded</StatusOK>;
          break;
        case "Failed":
        case "Error":
          state = <StatusError>Failed</StatusError>;
          break;
        default:
          state = <StatusPending>'${val.status?.phase}'</StatusPending>;
          break;
      }
      return {
        id: val.metadata.name,
        name: val.metadata.name,
        namespace: val.metadata.namespace,
        phase: state,
        progress: val.status?.progress,
        startedAt: val.status?.startedAt,
        finishedAt: val.status?.finishedAt,
      } as TableData;
    });
    if (data && data.length > 0) {
      setColumnData(data);
    }
  }, [value]);

  if (loading) {
    return <Progress />;
  } else if (error) {
    return <Alert severity="error">{`${error}`}</Alert>;
  }

  return (
    <Table
      options={{
        padding: "dense",
        paging: true,
        search: true,
        sorting: true,
      }}
      columns={columns}
      data={columnData}
    />
  );
};
