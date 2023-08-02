import {IoArgoprojWorkflowV1alpha1Workflow} from "../../api/generated/model/ioArgoprojWorkflowV1alpha1Workflow";
import { CopyTextButton, TabbedLayout } from '@backstage/core-components';
import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { stringify } from 'yaml';
import React from "react";


const useDrawerContentStyles = makeStyles(() =>
  createStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    icon: {
      fontSize: 20,
    },
    content: {
      height: '80%',
      overflow: 'scroll',
      display: 'flex',
      flexDirection: 'row',
    }
  })
)



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
            <DrawerOverview sparkApp={workflow} />
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/manifests" title="Manifest">
        <>
          <div className={classes.header}>
            <Typography variant="h6">{workflow.metadata.name}</Typography>
            <IconButton
              key="dismiss"
              title="Close"
              onClick={() => toggleDrawer(false)}
              color="inherit"
            >
              <Close className={classes.icon} />
            </IconButton>
          </div>
          <div className={classes.content}>
            <CopyTextButton text={yamlString} tooltipText="Copy" />
            <pre>{yamlString}</pre>
          </div>
        </>
      </TabbedLayout.Route>
      <TabbedLayout.Route path="/live-logs" title="Live logs">
        <>
          <div className={classes.logs2}>
            <div className={classes.logs}>
              <Typography variant="h6">
                Driver Log for {workflow.metadata.name}
              </Typography>
              <ApacheSparkDriverLogs sparkApp={workflow} />
            </div>
          </div>
          <div className={classes.logs2}>
            <div className={classes.logs}>
              <Typography variant="h6">
                Executor Logs for {workflow.metadata.name}
              </Typography>
              <ApacheSparkExecutorLogs sparkApp={workflow} />
            </div>
          </div>
        </>
      </TabbedLayout.Route>
    </TabbedLayout>
  );
};
