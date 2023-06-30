import { useEntity } from "@backstage/plugin-catalog-react";
import { configApiRef, useApi } from "@backstage/core-plugin-api";
import { argoWorkflowsApiRef } from "../../api";
import { getAnnotationValues, trimBaseUrl } from "../utils";
import { Link, Progress, Table, TableColumn } from "@backstage/core-components";
import React, { useEffect, useState } from "react";
import useAsync from "react-use/lib/useAsync";
import Alert from "@material-ui/lab/Alert";

type TableData = {
  id: string;
  name: string;
  namespace: string;
  entrypoint: string | undefined;
};

export const WorkflowTemplateTable = () => {
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
              to={`${argoWorkflowsBaseUrl}/workflow-templates/${data.namespace}/${data.name}`}
            >
              {data.name}
            </Link>
          );
        }
        return data.name;
      },
      defaultSort: "desc",
    },
    { title: "namespace", field: "namespace", type: "string" },
    { title: "entrypoint", field: "entrypoint", type: "string" },
  ];

  const { value, loading, error } = useAsync(async () => {
    return await apiClient.getWorkflowTemplates(clusterName, ns, labelSelector);
  });

  useEffect(() => {
    const data = value?.items?.map((val) => {
      return {
        id: val.metadata.name,
        name: val.metadata.name,
        namespace: val.metadata.namespace,
        entrypoint: val.spec.entrypoint,
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
