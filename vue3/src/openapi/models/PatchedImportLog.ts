/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Keyword } from './Keyword';
import {
    KeywordFromJSON,
    KeywordFromJSONTyped,
    KeywordToJSON,
} from './Keyword';

/**
 * 
 * @export
 * @interface PatchedImportLog
 */
export interface PatchedImportLog {
    /**
     * 
     * @type {number}
     * @memberof PatchedImportLog
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedImportLog
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedImportLog
     */
    msg?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedImportLog
     */
    running?: boolean;
    /**
     * 
     * @type {Keyword}
     * @memberof PatchedImportLog
     */
    readonly keyword?: Keyword;
    /**
     * 
     * @type {number}
     * @memberof PatchedImportLog
     */
    totalRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedImportLog
     */
    importedRecipes?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedImportLog
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedImportLog
     */
    readonly createdAt?: Date;
}

/**
 * Check if a given object implements the PatchedImportLog interface.
 */
export function instanceOfPatchedImportLog(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedImportLogFromJSON(json: any): PatchedImportLog {
    return PatchedImportLogFromJSONTyped(json, false);
}

export function PatchedImportLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedImportLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'msg': !exists(json, 'msg') ? undefined : json['msg'],
        'running': !exists(json, 'running') ? undefined : json['running'],
        'keyword': !exists(json, 'keyword') ? undefined : KeywordFromJSON(json['keyword']),
        'totalRecipes': !exists(json, 'total_recipes') ? undefined : json['total_recipes'],
        'importedRecipes': !exists(json, 'imported_recipes') ? undefined : json['imported_recipes'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function PatchedImportLogToJSON(value?: PatchedImportLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'msg': value.msg,
        'running': value.running,
        'total_recipes': value.totalRecipes,
        'imported_recipes': value.importedRecipes,
    };
}

