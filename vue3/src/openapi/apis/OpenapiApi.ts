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


import * as runtime from '../runtime';

export interface OpenapiRetrieveRequest {
    format?: OpenapiRetrieveFormatEnum;
    lang?: OpenapiRetrieveLangEnum;
}

/**
 * 
 */
export class OpenapiApi extends runtime.BaseAPI {

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    async openapiRetrieveRaw(requestParameters: OpenapiRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<{ [key: string]: any; }>> {
        const queryParameters: any = {};

        if (requestParameters.format !== undefined) {
            queryParameters['format'] = requestParameters.format;
        }

        if (requestParameters.lang !== undefined) {
            queryParameters['lang'] = requestParameters.lang;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/openapi/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * OpenApi3 schema for this API. Format can be selected via content negotiation.  - YAML: application/vnd.oai.openapi - JSON: application/vnd.oai.openapi+json
     */
    async openapiRetrieve(requestParameters: OpenapiRetrieveRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<{ [key: string]: any; }> {
        const response = await this.openapiRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const OpenapiRetrieveFormatEnum = {
    Json: 'json',
    Yaml: 'yaml'
} as const;
export type OpenapiRetrieveFormatEnum = typeof OpenapiRetrieveFormatEnum[keyof typeof OpenapiRetrieveFormatEnum];
/**
 * @export
 */
export const OpenapiRetrieveLangEnum = {
    Bg: 'bg',
    Ca: 'ca',
    Cs: 'cs',
    Da: 'da',
    De: 'de',
    En: 'en',
    Es: 'es',
    Fr: 'fr',
    Hu: 'hu',
    Hy: 'hy',
    It: 'it',
    Lv: 'lv',
    Nb: 'nb',
    Nl: 'nl',
    Pl: 'pl',
    Ru: 'ru',
    Sv: 'sv'
} as const;
export type OpenapiRetrieveLangEnum = typeof OpenapiRetrieveLangEnum[keyof typeof OpenapiRetrieveLangEnum];
