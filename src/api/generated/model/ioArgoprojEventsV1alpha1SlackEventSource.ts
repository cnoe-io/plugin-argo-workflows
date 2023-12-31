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
import { IoArgoprojEventsV1alpha1EventSourceFilter } from './ioArgoprojEventsV1alpha1EventSourceFilter';
import { IoArgoprojEventsV1alpha1WebhookContext } from './ioArgoprojEventsV1alpha1WebhookContext';
import { IoK8sApiCoreV1SecretKeySelector } from './ioK8sApiCoreV1SecretKeySelector';

export class IoArgoprojEventsV1alpha1SlackEventSource {
    'filter'?: IoArgoprojEventsV1alpha1EventSourceFilter;
    'metadata'?: { [key: string]: string; };
    'signingSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'token'?: IoK8sApiCoreV1SecretKeySelector;
    'webhook'?: IoArgoprojEventsV1alpha1WebhookContext;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "filter",
            "baseName": "filter",
            "type": "IoArgoprojEventsV1alpha1EventSourceFilter"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "signingSecret",
            "baseName": "signingSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "token",
            "baseName": "token",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "IoArgoprojEventsV1alpha1WebhookContext"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1SlackEventSource.attributeTypeMap;
    }
}

