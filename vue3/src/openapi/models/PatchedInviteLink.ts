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
import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './Group';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedInviteLink
 */
export interface PatchedInviteLink {
    /**
     * 
     * @type {number}
     * @memberof PatchedInviteLink
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedInviteLink
     */
    readonly uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedInviteLink
     */
    email?: string;
    /**
     * 
     * @type {Group}
     * @memberof PatchedInviteLink
     */
    group?: Group;
    /**
     * 
     * @type {Date}
     * @memberof PatchedInviteLink
     */
    validUntil?: Date;
    /**
     * 
     * @type {number}
     * @memberof PatchedInviteLink
     */
    usedBy?: number | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedInviteLink
     */
    reusable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof PatchedInviteLink
     */
    internalNote?: string | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedInviteLink
     */
    readonly createdBy?: number;
    /**
     * 
     * @type {Date}
     * @memberof PatchedInviteLink
     */
    readonly createdAt?: Date;
}

/**
 * Check if a given object implements the PatchedInviteLink interface.
 */
export function instanceOfPatchedInviteLink(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedInviteLinkFromJSON(json: any): PatchedInviteLink {
    return PatchedInviteLinkFromJSONTyped(json, false);
}

export function PatchedInviteLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedInviteLink {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'group': !exists(json, 'group') ? undefined : GroupFromJSON(json['group']),
        'validUntil': !exists(json, 'valid_until') ? undefined : (new Date(json['valid_until'])),
        'usedBy': !exists(json, 'used_by') ? undefined : json['used_by'],
        'reusable': !exists(json, 'reusable') ? undefined : json['reusable'],
        'internalNote': !exists(json, 'internal_note') ? undefined : json['internal_note'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
    };
}

export function PatchedInviteLinkToJSON(value?: PatchedInviteLink | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'group': GroupToJSON(value.group),
        'valid_until': value.validUntil === undefined ? undefined : (value.validUntil.toISOString().substring(0,10)),
        'used_by': value.usedBy,
        'reusable': value.reusable,
        'internal_note': value.internalNote,
    };
}

