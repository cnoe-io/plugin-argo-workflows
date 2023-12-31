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
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

/**
* GCSArtifact is the location of a GCS artifact
*/
export class IoArgoprojWorkflowV1alpha1GCSArtifact {
    /**
    * Bucket is the name of the bucket
    */
    'bucket'?: string;
    /**
    * Key is the path in the bucket where the artifact resides
    */
    'key': string;
    'serviceAccountKeySecret'?: IoK8sApiCoreV1SecretKeySelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string"
        },
        {
            "name": "key",
            "baseName": "key",
            "type": "string"
        },
        {
            "name": "serviceAccountKeySecret",
            "baseName": "serviceAccountKeySecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1GCSArtifact.attributeTypeMap;
    }
}

