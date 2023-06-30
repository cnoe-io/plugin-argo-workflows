// @ts-nocheck
export * from './archivedWorkflowServiceApi';
import { ArchivedWorkflowServiceApi } from './archivedWorkflowServiceApi';
export * from './artifactServiceApi';
import { ArtifactServiceApi } from './artifactServiceApi';
export * from './clusterWorkflowTemplateServiceApi';
import { ClusterWorkflowTemplateServiceApi } from './clusterWorkflowTemplateServiceApi';
export * from './cronWorkflowServiceApi';
import { CronWorkflowServiceApi } from './cronWorkflowServiceApi';
export * from './eventServiceApi';
import { EventServiceApi } from './eventServiceApi';
export * from './eventSourceServiceApi';
import { EventSourceServiceApi } from './eventSourceServiceApi';
export * from './infoServiceApi';
import { InfoServiceApi } from './infoServiceApi';
export * from './sensorServiceApi';
import { SensorServiceApi } from './sensorServiceApi';
export * from './workflowServiceApi';
import { WorkflowServiceApi } from './workflowServiceApi';
export * from './workflowTemplateServiceApi';
import { WorkflowTemplateServiceApi } from './workflowTemplateServiceApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ArchivedWorkflowServiceApi, ArtifactServiceApi, ClusterWorkflowTemplateServiceApi, CronWorkflowServiceApi, EventServiceApi, EventSourceServiceApi, InfoServiceApi, SensorServiceApi, WorkflowServiceApi, WorkflowTemplateServiceApi];
