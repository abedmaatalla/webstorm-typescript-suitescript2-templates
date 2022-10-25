/**
 * @Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 *
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */

import {EntryPoints} from 'N/types'

/**
 * Function to be executed after page is initialized.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.mode - The mode in which the record is being accessed (create, copy, or edit)
 *
 */
export const pageInit: EntryPoints.Client.pageInit = (context: EntryPoints.Client.pageInitContext) => {

}

/**
 * Function to be executed when field is changed.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 * @param {string} context.fieldId - Field name
 * @param {number} context.lineNum - Line number. Will be undefined if not a sublist or matrix field
 * @param {number} context.columnNum - Line number. Will be undefined if not a matrix field
 *
 */
export const fieldChanged: EntryPoints.Client.fieldChanged = (context: EntryPoints.Client.fieldChangedContext) => {

}

/**
 * Function to be executed when field is slaved.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 * @param {string} context.fieldId - Field name
 *
 */
export const postSourcing: EntryPoints.Client.postSourcing = (context: EntryPoints.Client.postSourcingContext) => {

}

/**
 * Function to be executed after sublist is inserted, removed, or edited.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 *
 */
export const sublistChanged: EntryPoints.Client.sublistChanged = (context: EntryPoints.Client.sublistChangedContext) => {

}

/**
 * Function to be executed after line is selected.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 *
 */
export const lineInit: EntryPoints.Client.lineInit = (context: EntryPoints.Client.lineInitContext) => {

}

/**
 * Validation function to be executed when field is changed.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 * @param {string} context.fieldId - Field name
 * @param {number} context.lineNum - Line number. Will be undefined if not a sublist or matrix field
 * @param {number} context.columnNum - Line number. Will be undefined if not a matrix field
 *
 * @returns {boolean} Return true if field is valid
 *
 */
export const validateField: EntryPoints.Client.validateField = (context: EntryPoints.Client.validateFieldContext): boolean => {
    return false
}

/**
 * Validation function to be executed when sublist line is committed.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 *
 * @returns {boolean} Return true if sublist line is valid
 *
 */
export const validateLine: EntryPoints.Client.validateLine = (context: EntryPoints.Client.validateLineContext) => {

}

/**
 * Validation function to be executed when sublist line is inserted.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 *
 * @returns {boolean} Return true if sublist line is valid
 *
 */
export const validateInsert: EntryPoints.Client.validateInsert = (context: EntryPoints.Client.validateInsertContext): boolean => {
    return false
}

/**
 * Validation function to be executed when record is deleted.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @param {string} context.sublistId - Sublist name
 *
 * @returns {boolean} Return true if sublist line is valid
 *
 */
export const validateDelete: EntryPoints.Client.validateDelete = (context: EntryPoints.Client.validateDeleteContext): boolean => {
    return false
}

/**
 * Validation function to be executed when record is saved.
 *
 * @param {Object} context
 * @param {Record} context.currentRecord - Current form record
 * @returns {boolean} Return true if record is valid
 *
 */
export const saveRecord: EntryPoints.Client.saveRecord = (context: EntryPoints.Client.saveRecordContext): boolean => {
    return false
}
