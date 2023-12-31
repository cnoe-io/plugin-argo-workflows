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

export class IoArgoprojEventsV1alpha1TriggerParameterSource {
    /**
    * ContextKey is the JSONPath of the event\'s (JSON decoded) context key ContextKey is a series of keys separated by a dot. A key may contain wildcard characters \'*\' and \'?\'. To access an array value use the index as the key. The dot and wildcard characters can be escaped with \'\\\\\'. See https://github.com/tidwall/gjson#path-syntax for more information on how to use this.
    */
    'contextKey'?: string;
    'contextTemplate'?: string;
    /**
    * DataKey is the JSONPath of the event\'s (JSON decoded) data key DataKey is a series of keys separated by a dot. A key may contain wildcard characters \'*\' and \'?\'. To access an array value use the index as the key. The dot and wildcard characters can be escaped with \'\\\\\'. See https://github.com/tidwall/gjson#path-syntax for more information on how to use this.
    */
    'dataKey'?: string;
    'dataTemplate'?: string;
    /**
    * DependencyName refers to the name of the dependency. The event which is stored for this dependency is used as payload for the parameterization. Make sure to refer to one of the dependencies you have defined under Dependencies list.
    */
    'dependencyName'?: string;
    /**
    * Value is the default literal value to use for this parameter source This is only used if the DataKey is invalid. If the DataKey is invalid and this is not defined, this param source will produce an error.
    */
    'value'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "contextKey",
            "baseName": "contextKey",
            "type": "string"
        },
        {
            "name": "contextTemplate",
            "baseName": "contextTemplate",
            "type": "string"
        },
        {
            "name": "dataKey",
            "baseName": "dataKey",
            "type": "string"
        },
        {
            "name": "dataTemplate",
            "baseName": "dataTemplate",
            "type": "string"
        },
        {
            "name": "dependencyName",
            "baseName": "dependencyName",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojEventsV1alpha1TriggerParameterSource.attributeTypeMap;
    }
}

