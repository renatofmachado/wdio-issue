class Elements {
    get module() {
        return $('[data-id="elements-list"]');
    }

    get listOfElements() {
        return this.module.$$('.card');
    }

    get notConfiguredElements() {
        return this.listOfElements.filter(card => card.$('[data-id="add-element-button"]').isExisting());
    }

    get alreadyConfiguredElements() {
        return this.listOfElements.filter(card => card.$('[data-id="already-added-chip"]').isExisting());
    }
}

module.exports = Elements;
