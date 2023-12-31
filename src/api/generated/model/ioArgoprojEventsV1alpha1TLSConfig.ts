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
* TLSConfig refers to TLS configuration for a client.
*/
export class IoArgoprojEventsV1alpha1TLSConfig {
    'caCertSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'clientCertSecret'?: IoK8sApiCoreV1SecretKeySelector;
    'clientKeySecret'?: IoK8sApiCoreV1SecretKeySelector;
    'insecureSkipVerify'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "caCertSecret",
            "baseName": "caCertSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "clientCertSecret",
            "baseName": "clientCertSecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "clientKeySecret",
            "baseName": "clientKeySecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        },
        {
            "name": "insecureSkipVerify",
            "baseName": "insecureSkipVerify",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1TLSConfig.attributeTypeMap;
    }
}

