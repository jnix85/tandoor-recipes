/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Step } from './Step';
import {
    StepFromJSON,
    StepFromJSONTyped,
    StepToJSON,
} from './Step';

/**
 * 
 * @export
 * @interface PaginatedStepList
 */
export interface PaginatedStepList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedStepList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStepList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStepList
     */
    previous?: string;
    /**
     * 
     * @type {Array<Step>}
     * @memberof PaginatedStepList
     */
    results: Array<Step>;
}

/**
 * Check if a given object implements the PaginatedStepList interface.
 */
export function instanceOfPaginatedStepList(value: object): boolean {
    if (!('count' in value)) return false;
    if (!('results' in value)) return false;
    return true;
}

export function PaginatedStepListFromJSON(json: any): PaginatedStepList {
    return PaginatedStepListFromJSONTyped(json, false);
}

export function PaginatedStepListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedStepList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(StepFromJSON)),
    };
}

export function PaginatedStepListToJSON(value?: PaginatedStepList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(StepToJSON)),
    };
}

