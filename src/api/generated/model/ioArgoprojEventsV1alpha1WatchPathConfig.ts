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

export class IoArgoprojEventsV1alpha1WatchPathConfig {
    'directory'?: string;
    'path'?: string;
    'pathRegexp'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "directory",
            "baseName": "directory",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "pathRegexp",
            "baseName": "pathRegexp",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1WatchPathConfig.attributeTypeMap;
    }
}

