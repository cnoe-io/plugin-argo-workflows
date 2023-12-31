// @ts-nocheck
/**
 * Argo Workflows API
 * Argo Workflows is an open source container-native workflow engine for orchestrating parallel jobs on Kubernetes. For more information, please see https://argoproj.github.io/argo-workflows/
 *
 * The version of the OpenAPI document: VERSION
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { IoArgoprojWorkflowV1alpha1WorkflowSpec } from './ioArgoprojWorkflowV1alpha1WorkflowSpec';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* CronWorkflowSpec is the specification of a CronWorkflow
*/
export class IoArgoprojWorkflowV1alpha1CronWorkflowSpec {
    /**
    * ConcurrencyPolicy is the K8s-style concurrency policy that will be used
    */
    'concurrencyPolicy'?: string;
    /**
    * FailedJobsHistoryLimit is the number of failed jobs to be kept at a time
    */
    'failedJobsHistoryLimit'?: number;
    /**
    * Schedule is a schedule to run the Workflow in Cron format
    */
    'schedule': string;
    /**
    * StartingDeadlineSeconds is the K8s-style deadline that will limit the time a CronWorkflow will be run after its original scheduled time if it is missed.
    */
    'startingDeadlineSeconds'?: number;
    /**
    * SuccessfulJobsHistoryLimit is the number of successful jobs to be kept at a time
    */
    'successfulJobsHistoryLimit'?: number;
    /**
    * Suspend is a flag that will stop new CronWorkflows from running if set to true
    */
    'suspend'?: boolean;
    /**
    * Timezone is the timezone against which the cron schedule will be calculated, e.g. \"Asia/Tokyo\". Default is machine\'s local time.
    */
    'timezone'?: string;
    'workflowMetadata'?: IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'workflowSpec': IoArgoprojWorkflowV1alpha1WorkflowSpec;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "concurrencyPolicy",
            "baseName": "concurrencyPolicy",
            "type": "string"
        },
        {
            "name": "failedJobsHistoryLimit",
            "baseName": "failedJobsHistoryLimit",
            "type": "number"
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "string"
        },
        {
            "name": "startingDeadlineSeconds",
            "baseName": "startingDeadlineSeconds",
            "type": "number"
        },
        {
            "name": "successfulJobsHistoryLimit",
            "baseName": "successfulJobsHistoryLimit",
            "type": "number"
        },
        {
            "name": "suspend",
            "baseName": "suspend",
            "type": "boolean"
        },
        {
            "name": "timezone",
            "baseName": "timezone",
            "type": "string"
        },
        {
            "name": "workflowMetadata",
            "baseName": "workflowMetadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "workflowSpec",
            "baseName": "workflowSpec",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowSpec"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1CronWorkflowSpec.attributeTypeMap;
    }
}

