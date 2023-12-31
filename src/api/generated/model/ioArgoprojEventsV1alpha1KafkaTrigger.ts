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
import { IoArgoprojEventsV1alpha1SASLConfig } from './ioArgoprojEventsV1alpha1SASLConfig';
import { IoArgoprojEventsV1alpha1TLSConfig } from './ioArgoprojEventsV1alpha1TLSConfig';
import { IoArgoprojEventsV1alpha1TriggerParameter } from './ioArgoprojEventsV1alpha1TriggerParameter';

/**
* KafkaTrigger refers to the specification of the Kafka trigger.
*/
export class IoArgoprojEventsV1alpha1KafkaTrigger {
    'compress'?: boolean;
    'flushFrequency'?: number;
    /**
    * Parameters is the list of parameters that is applied to resolved Kafka trigger object.
    */
    'parameters'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    /**
    * Partition to write data to.
    */
    'partition'?: number;
    /**
    * The partitioning key for the messages put on the Kafka topic. Defaults to broker url. +optional.
    */
    'partitioningKey'?: string;
    /**
    * Payload is the list of key-value extracted from an event payload to construct the request payload.
    */
    'payload'?: Array<IoArgoprojEventsV1alpha1TriggerParameter>;
    /**
    * RequiredAcks used in producer to tell the broker how many replica acknowledgements Defaults to 1 (Only wait for the leader to ack). +optional.
    */
    'requiredAcks'?: number;
    'sasl'?: IoArgoprojEventsV1alpha1SASLConfig;
    'tls'?: IoArgoprojEventsV1alpha1TLSConfig;
    'topic'?: string;
    /**
    * URL of the Kafka broker, multiple URLs separated by comma.
    */
    'url'?: string;
    'version'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "compress",
            "baseName": "compress",
            "type": "boolean"
        },
        {
            "name": "flushFrequency",
            "baseName": "flushFrequency",
            "type": "number"
        },
        {
            "name": "parameters",
            "baseName": "parameters",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>"
        },
        {
            "name": "partition",
            "baseName": "partition",
            "type": "number"
        },
        {
            "name": "partitioningKey",
            "baseName": "partitioningKey",
            "type": "string"
        },
        {
            "name": "payload",
            "baseName": "payload",
            "type": "Array<IoArgoprojEventsV1alpha1TriggerParameter>"
        },
        {
            "name": "requiredAcks",
            "baseName": "requiredAcks",
            "type": "number"
        },
        {
            "name": "sasl",
            "baseName": "sasl",
            "type": "IoArgoprojEventsV1alpha1SASLConfig"
        },
        {
            "name": "tls",
            "baseName": "tls",
            "type": "IoArgoprojEventsV1alpha1TLSConfig"
        },
        {
            "name": "topic",
            "baseName": "topic",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1KafkaTrigger.attributeTypeMap;
    }
}

