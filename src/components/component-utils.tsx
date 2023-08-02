import React from "react";
import {StatusError, StatusOK, StatusPending, StatusRunning} from "@backstage/core-components";

export function renderPhase(phase: string | undefined): React.JSX.Element {
  switch (phase) {
    case "Running":
      return <StatusRunning>Running</StatusRunning>
    case "Succeeded":
      return <StatusOK>Succeeded</StatusOK>;
    case "Failed":
    case "Error":
      return <StatusError>Failed</StatusError>;
    default:
      return <StatusPending>{phase}</StatusPending>;
  }
}
