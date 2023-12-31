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
* TarStrategy will tar and gzip the file or directory when saving
*/
export class IoArgoprojWorkflowV1alpha1TarStrategy {
    /**
    * CompressionLevel specifies the gzip compression level to use for the artifact. Defaults to gzip.DefaultCompression.
    */
    'compressionLevel'?: number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "compressionLevel",
            "baseName": "compressionLevel",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1TarStrategy.attributeTypeMap;
    }
}

