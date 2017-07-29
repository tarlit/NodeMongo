const ItemsData = require('./items.data');
const UsersData = require('./users.data');
const TodosData = require('./todos.data');
const CategoriesData = require('./categories.data');

const init = (db) => {
    return Promise.resolve({
        items: new ItemsData(db),
        users: new UsersData(db),
        todos: new TodosData(db),
        categories: new CategoriesData(db),
    });
};

module.exports = {
    init,
};
