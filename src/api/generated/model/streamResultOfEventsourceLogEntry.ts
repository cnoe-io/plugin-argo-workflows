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
import { EventsourceLogEntry } from './eventsourceLogEntry';
import { GrpcGatewayRuntimeStreamError } from './grpcGatewayRuntimeStreamError';

export class StreamResultOfEventsourceLogEntry {
    'error'?: GrpcGatewayRuntimeStreamError;
    'result'?: EventsourceLogEntry;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "GrpcGatewayRuntimeStreamError"
        },
        {
            "name": "result",
            "baseName": "result",
            "type": "EventsourceLogEntry"
        }    ];

    static getAttributeTypeMap() {
        return StreamResultOfEventsourceLogEntry.attributeTypeMap;
    }
}

