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

/**
* A link to another app.
*/
export class IoArgoprojWorkflowV1alpha1Link {
    /**
    * The name of the link, E.g. \"Workflow Logs\" or \"Pod Logs\"
    */
    'name': string;
    /**
    * \"workflow\", \"pod\", \"pod-logs\", \"event-source-logs\", \"sensor-logs\", \"workflow-list\" or \"chat\"
    */
    'scope': string;
    /**
    * The URL. Can contain \"${metadata.namespace}\", \"${metadata.name}\", \"${status.startedAt}\", \"${status.finishedAt}\" or any other element in workflow yaml, e.g. \"${io.argoproj.workflow.v1alpha1.metadata.annotations.userDefinedKey}\"
    */
    'url': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "scope",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1Link.attributeTypeMap;
    }
}

