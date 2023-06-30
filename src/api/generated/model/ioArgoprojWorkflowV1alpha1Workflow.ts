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
import { IoArgoprojWorkflowV1alpha1WorkflowStatus } from './ioArgoprojWorkflowV1alpha1WorkflowStatus';
import { IoK8sApimachineryPkgApisMetaV1ObjectMeta } from './ioK8sApimachineryPkgApisMetaV1ObjectMeta';

/**
* Workflow is the definition of a workflow resource
*/
export class IoArgoprojWorkflowV1alpha1Workflow {
    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#resources
    */
    'apiVersion'?: string;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.io.k8s.community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
    */
    'kind'?: string;
    'metadata': IoK8sApimachineryPkgApisMetaV1ObjectMeta;
    'spec': IoArgoprojWorkflowV1alpha1WorkflowSpec;
    'status'?: IoArgoprojWorkflowV1alpha1WorkflowStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoK8sApimachineryPkgApisMetaV1ObjectMeta"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowSpec"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "IoArgoprojWorkflowV1alpha1WorkflowStatus"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1Workflow.attributeTypeMap;
    }
}
