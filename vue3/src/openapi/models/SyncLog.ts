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
/**
 * 
 * @export
 * @interface SyncLog
 */
export interface SyncLog {
    /**
     * 
     * @type {number}
     * @memberof SyncLog
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof SyncLog
     */
    sync: number;
    /**
     * 
     * @type {string}
     * @memberof SyncLog
     */
    status: string;
    /**
     * 
     * @type {string}
     * @memberof SyncLog
     */
    msg?: string;
    /**
     * 
     * @type {Date}
     * @memberof SyncLog
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the SyncLog interface.
 */
export function instanceOfSyncLog(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "sync" in value;
    isInstance = isInstance && "status" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function SyncLogFromJSON(json: any): SyncLog {
    return SyncLogFromJSONTyped(json, false);
}

export function SyncLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): SyncLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'sync': json['sync'],
        'status': json['status'],
        'msg': !exists(json, 'msg') ? undefined : json['msg'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function SyncLogToJSON(value?: SyncLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sync': value.sync,
        'status': value.status,
        'msg': value.msg,
    };
}

