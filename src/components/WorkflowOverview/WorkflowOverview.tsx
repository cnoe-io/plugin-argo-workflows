import { configApiRef, useApi } from "@backstage/core-plugin-api";
import { argoWorkflowsApiRef } from "../../api";
import useAsync from "react-use/lib/useAsync";
import { Link, Progress, Table, TableColumn } from "@backstage/core-components";
import React, { useState, useEffect } from "react";
import Alert from "@material-ui/lab/Alert";
import { useEntity } from "@backstage/plugin-catalog-react";
import {
  IoArgoprojWorkflowV1alpha1Workflow,
  IoArgoprojWorkflowV1alpha1WorkflowList,
} from "../../api/generated/api";
import { getAnnotationValues, trimBaseUrl } from "../utils";
import { renderPhase } from "../component-utils";
import { Drawer } from "@material-ui/core";
import { DrawerContent } from "../WorkflowDetailsDrawer/WorkflowDetailsDrawer";

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
  const [drawerData, setDrawerData] = useState(
    {} as IoArgoprojWorkflowV1alpha1Workflow
  );
  const [isOpen, toggleDrawer] = useState(false);
  const argoWorkflowsBaseUrl = trimBaseUrl(
    configApi.getOptionalString("argoWorkflows.baseUrl")
  );
  const [columnData, setColumnData] = useState([] as TableData[]);
  const { ns, clusterName, labelSelector } = getAnnotationValues(entity);
  const columns: TableColumn<TableData>[] = [
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
      return {
        id: val.metadata.name,
        name: val.metadata.name,
        namespace: val.metadata.namespace,
        phase: renderPhase(val.status?.phase),
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
    <>
      <Table
        options={{
          padding: "dense",
          paging: true,
          search: true,
          sorting: true,
        }}
        columns={columns}
        data={columnData}
        onRowClick={(_event, rowData: TableData | undefined) => {
          setDrawerData(rowData?.raw!);
          toggleDrawer(true);
        }}
      />
      <Drawer
        classes={{
          paper: classes.paper,
        }}
        anchor="right"
        open={isOpen}
        onClose={() => toggleDrawer(false)}
      >
        <DrawerContent toggleDrawer={toggleDrawer} workflow={drawerData} />
      </Drawer>
    </>
  );
};
