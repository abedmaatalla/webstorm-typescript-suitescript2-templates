/**
 * @Copyright (c) ${YEAR}, Oracle and/or its affiliates. All rights reserved.
 *
 * @jest-environment jsdom
 */

//#region mock all NModules
jest.mock('N/cache', () => ({}), {virtual: true})
jest.mock('N/currentRecord', () => ({}), {virtual: true})
jest.mock('N/config', () => ({}), {virtual: true})
jest.mock('N/ui/dialog', () => ({}), {virtual: true})
jest.mock('N/error', () => ({}), {virtual: true})
jest.mock('N/file', () => ({}), {virtual: true})
jest.mock('N/format', () => ({}), {virtual: true})
jest.mock('N/http', () => ({}), {virtual: true})
jest.mock('N/https', () => ({}), {virtual: true})
jest.mock('N/log', () => ({}), {virtual: true})
jest.mock('N/ui/message', () => ({}), {virtual: true})
jest.mock('N/query', () => ({}), {virtual: true})
jest.mock('N/record', () => ({}), {virtual: true})
jest.mock('N/redirect', () => ({}), {virtual: true})
jest.mock('N/render', () => ({}), {virtual: true})
jest.mock('N/runtime', () => ({}), {virtual: true})
jest.mock('N/search', () => ({}), {virtual: true})
jest.mock('N/ui/serverWidget', () => ({}), {virtual: true})
jest.mock('N/task', () => ({}), {virtual: true})
jest.mock('N/transaction', () => ({}), {virtual: true})
jest.mock('N/translation', () => ({}), {virtual: true})
jest.mock('N/types', () => ({}), {virtual: true})
jest.mock('N/url', () => ({}), {virtual: true})
jest.mock('N/xml', () => ({}), {virtual: true})
// # endregion

describe('${FILE_NAME}', () => {
    let mocks: NMock
    beforeAll(() => {
        mocks = new NMock()
    })

    beforeEach(() => {
        mocks.currentRecordMock.clearBeforeRun()
        mocks.httpsMock.clearBeforeRun()
        jest.clearAllMocks()
    })

    afterEach(() => {
    })

    afterAll(() => {
    })
    #[[$END$]]#
})
