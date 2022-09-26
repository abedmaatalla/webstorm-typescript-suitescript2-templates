/**
 *    Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType UserEventScript
 * @NModuleScope SameAccount
 */


import {EntryPoints} from 'N/types'


/**
 * Function definition to be triggered before record is loaded.
 *
 * @param {Object} context
 * @param {Record} context.newRecord - New record
 * @param {string} context.type - Trigger type
 * @param {Form} context.form - Current form
 *
 */
export const beforeLoad: EntryPoints.UserEvent.beforeLoad = (context: EntryPoints.UserEvent.beforeLoadContext) => {

}

/**
 * Function definition to be triggered before record is loaded.
 *
 * @param {Object} context
 * @param {Record} context.newRecord - New record
 * @param {Record} context.oldRecord - Old record
 * @param {string} context.type - Trigger type
 *
 */
export const beforeSubmit: EntryPoints.UserEvent.beforeSubmit = (context: EntryPoints.UserEvent.beforeSubmitContext) => {

}


/**
 * Function definition to be triggered before record is loaded.
 *
 * @param {Object} context
 * @param {Record} context.newRecord - New record
 * @param {Record} context.oldRecord - Old record
 * @param {string} context.type - Trigger type
 *
 */
export const afterSubmit: EntryPoints.UserEvent.afterSubmit = (context: EntryPoints.UserEvent.afterSubmitContext) => {

}