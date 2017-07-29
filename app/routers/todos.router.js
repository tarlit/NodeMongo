const attachTo = (app, data) => {
    app.get('/todos', (req, res) => {
        return data.todos.getAll()
            .then((todos) => {
                return res.render('todos/all', {
                    todos,
                });
            });
    });

    app.get('/todos/form', (req, res) => {
        return res.render('todos/form', {
            categories: ['action', 'morning', 'work'],
        });
    });

    app.post('/todos', (req, res) => {
        const todo = req.body;

        // validate item
        let dbTodo = null;
        return data.todos.create(todo)
            .then((_dbTodo) => {
                dbTodo = _dbTodo;
                return data.categories.filterBy({
                    name: todo.category,
                });
            })
            .then(([category]) => {
                const categoryTodo = {
                    text: todo.text,
                    isDone: todo.isDone,
                    _id: dbTodo.ops[0]._id,
                };

                if (!category) {
                    category = {
                        name: todo.category,
                        todos: [categoryTodo],
                    };

                    return data.categories.create(category);
                }

                category.todos.push(todo);
                return data.categories.updateById(category);
            })
            .then(() => {
                return res.redirect('/todos');
            })
            .catch((err) => {
                req.flash('error', err);
                return res.redirect('/todos/form');
            });
    });
};

module.exports = { attachTo };

/*
how to choose category
where and how to update the category
*/
