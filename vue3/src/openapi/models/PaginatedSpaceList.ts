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
import type { Space } from './Space';
import {
    SpaceFromJSON,
    SpaceFromJSONTyped,
    SpaceToJSON,
} from './Space';

/**
 * 
 * @export
 * @interface PaginatedSpaceList
 */
export interface PaginatedSpaceList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedSpaceList
     */
    count: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceList
     */
    next?: string;
    /**
     * 
     * @type {string}
     * @memberof PaginatedSpaceList
     */
    previous?: string;
    /**
     * 
     * @type {Array<Space>}
     * @memberof PaginatedSpaceList
     */
    results: Array<Space>;
}

/**
 * Check if a given object implements the PaginatedSpaceList interface.
 */
export function instanceOfPaginatedSpaceList(value: object): boolean {
    if (!('count' in value)) return false;
    if (!('results' in value)) return false;
    return true;
}

export function PaginatedSpaceListFromJSON(json: any): PaginatedSpaceList {
    return PaginatedSpaceListFromJSONTyped(json, false);
}

export function PaginatedSpaceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedSpaceList {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'next': json['next'] == null ? undefined : json['next'],
        'previous': json['previous'] == null ? undefined : json['previous'],
        'results': ((json['results'] as Array<any>).map(SpaceFromJSON)),
    };
}

export function PaginatedSpaceListToJSON(value?: PaginatedSpaceList | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'next': value['next'],
        'previous': value['previous'],
        'results': ((value['results'] as Array<any>).map(SpaceToJSON)),
    };
}

