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
import { GrpcGatewayRuntimeStreamError } from './grpcGatewayRuntimeStreamError';
import { SensorSensorWatchEvent } from './sensorSensorWatchEvent';

export class StreamResultOfSensorSensorWatchEvent {
    'error'?: GrpcGatewayRuntimeStreamError;
    'result'?: SensorSensorWatchEvent;

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
            "type": "SensorSensorWatchEvent"
        }    ];

    static getAttributeTypeMap() {
        return StreamResultOfSensorSensorWatchEvent.attributeTypeMap;
    }
}

