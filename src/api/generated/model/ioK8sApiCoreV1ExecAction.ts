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
* ExecAction describes a \"run in container\" action.
*/
export class IoK8sApiCoreV1ExecAction {
    /**
    * Command is the command line to execute inside the container, the working directory for the command  is root (\'/\') in the container\'s filesystem. The command is simply exec\'d, it is not run inside a shell, so traditional shell instructions (\'|\', etc) won\'t work. To use a shell, you need to explicitly call out to that shell. Exit status of 0 is treated as live/healthy and non-zero is unhealthy.
    */
    'command'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "command",
            "baseName": "command",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1ExecAction.attributeTypeMap;
    }
}

