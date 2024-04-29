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
/**
 * 
 * @export
 * @interface PatchedBookmarkletImport
 */
export interface PatchedBookmarkletImport {
    /**
     * 
     * @type {number}
     * @memberof PatchedBookmarkletImport
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedBookmarkletImport
     */
    url?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedBookmarkletImport
     */
    html?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedBookmarkletImport
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedBookmarkletImport
     */
    readonly createdAt?: Date;
}

/**
 * Check if a given object implements the PatchedBookmarkletImport interface.
 */
export function instanceOfPatchedBookmarkletImport(value: object): boolean {
    return true;
}

export function PatchedBookmarkletImportFromJSON(json: any): PatchedBookmarkletImport {
    return PatchedBookmarkletImportFromJSONTyped(json, false);
}

export function PatchedBookmarkletImportFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedBookmarkletImport {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'url': json['url'] == null ? undefined : json['url'],
        'html': json['html'] == null ? undefined : json['html'],
        'createdBy': json['created_by'] == null ? undefined : json['created_by'],
        'createdAt': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
    };
}

export function PatchedBookmarkletImportToJSON(value?: PatchedBookmarkletImport | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'url': value['url'],
        'html': value['html'],
    };
}

