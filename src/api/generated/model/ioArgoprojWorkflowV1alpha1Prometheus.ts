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
import { IoArgoprojWorkflowV1alpha1Counter } from './ioArgoprojWorkflowV1alpha1Counter';
import { IoArgoprojWorkflowV1alpha1Gauge } from './ioArgoprojWorkflowV1alpha1Gauge';
import { IoArgoprojWorkflowV1alpha1Histogram } from './ioArgoprojWorkflowV1alpha1Histogram';
import { IoArgoprojWorkflowV1alpha1MetricLabel } from './ioArgoprojWorkflowV1alpha1MetricLabel';

/**
* Prometheus is a prometheus metric to be emitted
*/
export class IoArgoprojWorkflowV1alpha1Prometheus {
    'counter'?: IoArgoprojWorkflowV1alpha1Counter;
    'gauge'?: IoArgoprojWorkflowV1alpha1Gauge;
    /**
    * Help is a string that describes the metric
    */
    'help': string;
    'histogram'?: IoArgoprojWorkflowV1alpha1Histogram;
    /**
    * Labels is a list of metric labels
    */
    'labels'?: Array<IoArgoprojWorkflowV1alpha1MetricLabel>;
    /**
    * Name is the name of the metric
    */
    'name': string;
    /**
    * When is a conditional statement that decides when to emit the metric
    */
    'when'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "counter",
            "baseName": "counter",
            "type": "IoArgoprojWorkflowV1alpha1Counter"
        },
        {
            "name": "gauge",
            "baseName": "gauge",
            "type": "IoArgoprojWorkflowV1alpha1Gauge"
        },
        {
            "name": "help",
            "baseName": "help",
            "type": "string"
        },
        {
            "name": "histogram",
            "baseName": "histogram",
            "type": "IoArgoprojWorkflowV1alpha1Histogram"
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "Array<IoArgoprojWorkflowV1alpha1MetricLabel>"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "when",
            "baseName": "when",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return IoArgoprojWorkflowV1alpha1Prometheus.attributeTypeMap;
    }
}

