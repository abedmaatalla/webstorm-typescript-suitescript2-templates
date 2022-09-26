/**
 *    Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType MapReduceScript
 * @NModuleScope SameAccount
 */

import {EntryPoints} from 'N/types'

/**
 * Function to be executed
 *
 * @param {Object} context
 * @param {boolean} context.isRestarted
 * @param {ObjectReference} context.ObjectRef
 *
 * @returns {[]} Return true if field is valid
 *
 */
export const getInputData = (context: EntryPoints.MapReduce.getInputDataContext) => {

}

/**
 * Function to be executed
 *
 * @param {Object} context
 * @param {boolean} context.value
 * @param {boolean} context.key
 * @param {boolean} context.errors
 * @param {boolean} context.write
 * @param {boolean} context.isRestarted
 * @param {boolean} context.executionNo
 *
 */
export const map = (context: EntryPoints.MapReduce.mapContext) => {
    context.write('id', 'newId')
}

/**
 * Function to be executed
 *
 * @param {Object} context
 * @param {boolean} context.key
 * @param {boolean} context.errors
 * @param {boolean} context.write
 * @param {boolean} context.values
 * @param {boolean} context.isRestarted
 * @param {boolean} context.executionNo
 *
 */
export const reduce = (context: EntryPoints.MapReduce.reduceContext) => {
    context.values.forEach((newId: string) => {
    })
}

/**
 * Function to be executed
 *
 * @param {Object} context
 * @param {boolean} context.concurrency
 * @param {boolean} context.seconds
 * @param {boolean} context.usage
 * @param {boolean} context.yields
 * @param {boolean} context.dateCreated
 * @param {boolean} context.inputSummary
 * @param {boolean} context.isRestarted
 * @param {boolean} context.output
 * @param {boolean} context.mapSummary
 * @param {boolean} context.reduceSummary
 *
 */
export const summarize: EntryPoints.MapReduce.summarize = (context: EntryPoints.MapReduce.summarizeContext) => {

}
