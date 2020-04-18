const Elements = require('../page-objects/Elements')
const assert = require('assert')

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        const elements = new Elements()

        browser.url('/')
        const configured = elements.alreadyConfiguredElements
        const toConfigure = elements.notConfiguredElements

        assert.strictEqual(configured.length, 18)
        assert.strictEqual(toConfigure.length, 6)
    })


})

describe('webdriver.io', () => {
    it('webdriverio/issues/5290', () => {
        browser.url('http://localhost:3000/');

        var listOfCards = $('[data-id="elements-list"]').$$('.card');
        var alreadyConfiguredElements = listOfCards.filter(card => card.$('[data-id="already-added-chip"]').isExisting());
        console.log("alreadyConfiguredElements ==> " + alreadyConfiguredElements.length);

        var notConfiguredElements = listOfCards.filter(card => card.$('[data-id="add-element-button"]').isExisting());
        console.log("notConfiguredElements ==> " + notConfiguredElements.length);

        assert.strictEqual(alreadyConfiguredElements.length, 18);
        assert.strictEqual(notConfiguredElements.length, 6);
    });
});
