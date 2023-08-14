/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AlbumRestrictionObject = {
    /**
     * The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
 * Additional reasons may be added in the future.
 * 
     */
    reason?: AlbumRestrictionObject.reason;
};

export namespace AlbumRestrictionObject {

    /**
     * The reason for the restriction. Albums may be restricted if the content is not available in a given market, to the user's subscription type, or when the user's account is set to not play explicit content.
 * Additional reasons may be added in the future.
 * 
     */
    export enum reason {
        MARKET = 'market',
        PRODUCT = 'product',
        EXPLICIT = 'explicit',
    }


}
