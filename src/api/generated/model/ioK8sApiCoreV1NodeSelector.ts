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
import { IoK8sApiCoreV1NodeSelectorTerm } from './ioK8sApiCoreV1NodeSelectorTerm';

/**
* A node selector represents the union of the results of one or more label queries over a set of nodes; that is, it represents the OR of the selectors represented by the node selector terms.
*/
export class IoK8sApiCoreV1NodeSelector {
    /**
    * Required. A list of node selector terms. The terms are ORed.
    */
    'nodeSelectorTerms': Array<IoK8sApiCoreV1NodeSelectorTerm>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "nodeSelectorTerms",
            "baseName": "nodeSelectorTerms",
            "type": "Array<IoK8sApiCoreV1NodeSelectorTerm>"
        }    ];

    static getAttributeTypeMap() {
        return IoK8sApiCoreV1NodeSelector.attributeTypeMap;
    }
}

