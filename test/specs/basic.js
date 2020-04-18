const Elements = require('../page-objects/Elements')
const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        const elements = new Elements()

        browser.url('/')
        const configured = elements.alreadyConfiguredElements
        const toConfigure = elements.notConfiguredElements

        assert.strictEqual(configured.length, 3)
        assert.strictEqual(toConfigure.length, 1)
    })
})
