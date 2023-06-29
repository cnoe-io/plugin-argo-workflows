import React from "react";
import {
  Header,
  HeaderLabel,
  Page,
  Content,
  ContentHeader,
  SupportButton,
  InfoCard,
} from "@backstage/core-components";
import { Grid } from "@material-ui/core";
import { OverviewTable } from "../WorkflowOverview/WorkflowOverview";
import { useEntity } from "@backstage/plugin-catalog-react";
import { isArgoWorkflowsAvailable } from "../../plugin";

export const ArgoWorkflowsOverviewPage = () => (
  <Page themeId="tool">
    <Header title="Argo Workflows">
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="Overview">
        <SupportButton>Overview of your Argo Workflows</SupportButton>
      </ContentHeader>
      <Grid item>
        <OverviewTable />
      </Grid>
    </Content>
  </Page>
);

export const ArgoWorkflowsOverviewCard = () => {
  const { entity } = useEntity();
  if (isArgoWorkflowsAvailable(entity)) {
    return (
      <InfoCard {...{ title: "Argo Workflows" }}>
        <OverviewTable />
      </InfoCard>
    );
  }
  return null;
};
