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
import { IoArgoprojEventsV1alpha1Metadata } from './ioArgoprojEventsV1alpha1Metadata';
import { IoK8sApiCoreV1Affinity } from './ioK8sApiCoreV1Affinity';
import { IoK8sApiCoreV1Container } from './ioK8sApiCoreV1Container';
import { IoK8sApiCoreV1LocalObjectReference } from './ioK8sApiCoreV1LocalObjectReference';
import { IoK8sApiCoreV1PodSecurityContext } from './ioK8sApiCoreV1PodSecurityContext';
import { IoK8sApiCoreV1Toleration } from './ioK8sApiCoreV1Toleration';
import { IoK8sApiCoreV1Volume } from './ioK8sApiCoreV1Volume';

export class IoArgoprojEventsV1alpha1Template {
    'affinity'?: IoK8sApiCoreV1Affinity;
    'container'?: IoK8sApiCoreV1Container;
    'imagePullSecrets'?: Array<IoK8sApiCoreV1LocalObjectReference>;
    'metadata'?: IoArgoprojEventsV1alpha1Metadata;
    'nodeSelector'?: { [key: string]: string; };
    'priority'?: number;
    'priorityClassName'?: string;
    'securityContext'?: IoK8sApiCoreV1PodSecurityContext;
    'serviceAccountName'?: string;
    'tolerations'?: Array<IoK8sApiCoreV1Toleration>;
    'volumes'?: Array<IoK8sApiCoreV1Volume>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "affinity",
            "baseName": "affinity",
            "type": "IoK8sApiCoreV1Affinity"
        },
        {
            "name": "container",
            "baseName": "container",
            "type": "IoK8sApiCoreV1Container"
        },
        {
            "name": "imagePullSecrets",
            "baseName": "imagePullSecrets",
            "type": "Array<IoK8sApiCoreV1LocalObjectReference>"
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "IoArgoprojEventsV1alpha1Metadata"
        },
        {
            "name": "nodeSelector",
            "baseName": "nodeSelector",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "number"
        },
        {
            "name": "priorityClassName",
            "baseName": "priorityClassName",
            "type": "string"
        },
        {
            "name": "securityContext",
            "baseName": "securityContext",
            "type": "IoK8sApiCoreV1PodSecurityContext"
        },
        {
            "name": "serviceAccountName",
            "baseName": "serviceAccountName",
            "type": "string"
        },
        {
            "name": "tolerations",
            "baseName": "tolerations",
            "type": "Array<IoK8sApiCoreV1Toleration>"
        },
        {
            "name": "volumes",
            "baseName": "volumes",
            "type": "Array<IoK8sApiCoreV1Volume>"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1Template.attributeTypeMap;
    }
}

