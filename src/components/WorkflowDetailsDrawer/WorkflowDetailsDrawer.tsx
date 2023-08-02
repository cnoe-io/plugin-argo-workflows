import { IoArgoprojWorkflowV1alpha1Workflow } from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Workflow";
import { CopyTextButton, TabbedLayout } from "@backstage/core-components";
import { createStyles, makeStyles } from "@material-ui/core";
import { stringify } from "yaml";
import React from "react";
import { DrawerOverview } from "../WorkflowDetailsOverview/WorkflowsDetailsOverview";

const useDrawerContentStyles = makeStyles(() =>
  createStyles({
    header: {
      display: "flex",
      justifyContent: "space-between",
    },
    icon: {
      fontSize: 20,
    },
    content: {
      height: "80%",
      overflow: "scroll",
      display: "flex",
      flexDirection: "row",
    },
  })
);

export const DrawerContent = ({
  toggleDrawer,
  workflow,
}: {
  toggleDrawer: (isOpen: boolean) => void;
  workflow: IoArgoprojWorkflowV1alpha1Workflow;
}) => {
  const classes = useDrawerContentStyles();
  const yamlString = stringify(workflow);
  return (
    <TabbedLayout>
      <TabbedLayout.Route path="/" title="Overview">
        <>
          <div>
            <DrawerOverview workflow={workflow} />
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/manifests" title="Manifest">
        <>
          <div className={classes.content}>
            <CopyTextButton text={yamlString} tooltipText="Copy" />
            <pre>{yamlString}</pre>
          </div>
        </>
      </TabbedLayout.Route>
    </TabbedLayout>
  );
};
