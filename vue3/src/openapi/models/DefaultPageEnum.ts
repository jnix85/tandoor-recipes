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


/**
 * * `SEARCH` - Search
 * * `PLAN` - Meal-Plan
 * * `BOOKS` - Books
 * @export
 */
export const DefaultPageEnum = {
    Search: 'SEARCH',
    Plan: 'PLAN',
    Books: 'BOOKS'
} as const;
export type DefaultPageEnum = typeof DefaultPageEnum[keyof typeof DefaultPageEnum];


export function DefaultPageEnumFromJSON(json: any): DefaultPageEnum {
    return DefaultPageEnumFromJSONTyped(json, false);
}

export function DefaultPageEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultPageEnum {
    return json as DefaultPageEnum;
}

export function DefaultPageEnumToJSON(value?: DefaultPageEnum | null): any {
    return value as any;
}

