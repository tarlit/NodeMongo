const BaseData = require('./base/base.data');
const Todo = require('../models/todo.model');

class TodosData extends BaseData {
    constructor(db) {
        super(db, Todo, Todo);
    }

    _isModelValid(model) {
        // custom validation
        return super._isModelValid(model);
    }
}

module.exports = TodosData;
