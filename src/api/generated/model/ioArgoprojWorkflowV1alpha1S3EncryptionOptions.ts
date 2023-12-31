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
* S3EncryptionOptions used to determine encryption options during s3 operations
*/
export class IoArgoprojWorkflowV1alpha1S3EncryptionOptions {
    /**
    * EnableEncryption tells the driver to encrypt objects if set to true. If kmsKeyId and serverSideCustomerKeySecret are not set, SSE-S3 will be used
    */
    'enableEncryption'?: boolean;
    /**
    * KmsEncryptionContext is a json blob that contains an encryption context. See https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#encrypt_context for more information
    */
    'kmsEncryptionContext'?: string;
    /**
    * KMSKeyId tells the driver to encrypt the object using the specified KMS Key.
    */
    'kmsKeyId'?: string;
    'serverSideCustomerKeySecret'?: IoK8sApiCoreV1SecretKeySelector;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "enableEncryption",
            "baseName": "enableEncryption",
            "type": "boolean"
        },
        {
            "name": "kmsEncryptionContext",
            "baseName": "kmsEncryptionContext",
            "type": "string"
        },
        {
            "name": "kmsKeyId",
            "baseName": "kmsKeyId",
            "type": "string"
        },
        {
            "name": "serverSideCustomerKeySecret",
            "baseName": "serverSideCustomerKeySecret",
            "type": "IoK8sApiCoreV1SecretKeySelector"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1S3EncryptionOptions.attributeTypeMap;
    }
}

