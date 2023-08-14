/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CursorObject } from './CursorObject';

export type CursorPagingObject = {
    /**
     * A link to the Web API endpoint returning the full result of the request.
     */
    href?: string;
    /**
     * The maximum number of items in the response (as set in the query or by default).
     */
    limit?: number;
    /**
     * URL to the next page of items. ( `null` if none)
     */
    next?: string;
    /**
     * The cursors used to find the next set of items.
     */
    cursors?: CursorObject;
    /**
     * The total number of items available to return.
     */
    total?: number;
};
