/**
 * @Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType Suitelet
 * @NModuleScope SameAccount
 */

/**
 * Definition of the Suitelet script trigger point.
 *
 * @param {Object} context
 * @param {ServerRequest} context.request - Encapsulation of the incoming request
 * @param {ServerResponse} context.response - Encapsulation of the Suitelet response
 *
 */
export function onRequest(context: any) {

    const isGet = context.request.method === 'GET'
    const isPost = context.request.method === 'POST'

    if (isGet) {
        handleGet(context.request, context.response)
    }
    if (isPost) {
        handlePost(context.request, context.response)
    }
}

function handleGet(request: any, response: any) {

}

function handlePost(request, response) {

}
