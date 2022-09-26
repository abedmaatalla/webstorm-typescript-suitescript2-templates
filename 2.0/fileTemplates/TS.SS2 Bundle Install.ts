/**
 *    Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 */

/**
 * @NApiVersion 2.#[[$Version$]]#
 * @NScriptType BundleInstallationScript
 * @NModuleScope SameAccount
 */

/**
 * Executes after a bundle is installed for the first time in a target account.
 *
 * @param {Object} params
 * @param {number} params.version - Version of the bundle being installed
 *
 */
export function beforeInstall(params) {

}

/**
 * Executes after a bundle in a target account is updated.
 *
 * @param {Object} params
 * @param {number} params.version - Version of the bundle being installed
 *
 */
export function afterInstall(params) {

}

/**
 * Executes before a bundle is installed for the first time in a target account.
 *
 * @param {Object} params
 * @param {number} params.fromVersion - Version currently installed
 * @param {number} params.toVersion -  New version of the bundle being installed
 *
 */
export function beforeUpdate(params) {

}

/**
 * Executes before a bundle is uninstalled from a target account.
 *
 * @param {Object} params
 * @param {number} params.fromVersion - Version currently installed
 * @param {number} params.toVersion -  New version of the bundle being installed
 *
 */
export function afterUpdate(params) {

}

/**
 * Executes before a bundle in a target account is updated.
 *
 * @param {Object} params
 * @param {number} params.version - Version of the bundle being unistalled
 *
 */
export function beforeUninstsall(params) {

}