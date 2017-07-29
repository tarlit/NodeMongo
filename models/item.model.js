class Item {
    static isValid(model) {
        return typeof model !== 'undefined' &&
            typeof model.text === 'string' &&
            model.text.length > 3;
    }

    // static toViewModel(model) {
    //     const viewModel = new Item();
    //     Object.keys(model)
    //         .forEach((prop) => {
    //             viewModel[prop] = model[prop];
    //         });
    //     return viewModel;
    // }

    // static fromViewModel(viewModel) {

    // }

    get id() {
        return this._id;
    }
}

module.exports = Item;
