/**
 * @Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 *
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType Restlet
 * @NModuleScope SameAccount
 */

/**
 * Function called upon sending a GET request to the RESTlet.
 *
 * @param {Object} requestParams - Parameters from HTTP request URL; parameters will be passed into function as an Object (for all supported content types)
 * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
 *
 */
export function doGet(requestParams) {

}

/**
 * Function called upon sending a PUT request to the RESTlet.
 *
 * @param {string | Object} requestBody - The HTTP request body; request body will be passed into function as a string when request Content-Type is 'text/plain'
 * or parsed into an Object when request Content-Type is 'application/json' (in which case the body must be a valid JSON)
 * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
 *
 */
export function doPut(requestBody) {

}


/**
 * Function called upon sending a POST request to the RESTlet.
 *
 * @param {string | Object} requestBody - The HTTP request body; request body will be passed into function as a string when request Content-Type is 'text/plain'
 * or parsed into an Object when request Content-Type is 'application/json' (in which case the body must be a valid JSON)
 * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
 *
 */
export function doPost(requestBody) {

}

/**
 * Function called upon sending a DELETE request to the RESTlet.
 *
 * @param {Object} requestParams - Parameters from HTTP request URL; parameters will be passed into function as an Object (for all supported content types)
 * @returns {string | Object} HTTP response body; return string when request Content-Type is 'text/plain'; return Object when request Content-Type is 'application/json'
 *
 */
export function doDelete(requestParams) {

}