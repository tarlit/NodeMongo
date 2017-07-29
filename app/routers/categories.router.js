const attachTo = (app, data) => {
    app.get('/categories', (req, res) => {
        return data.categories.getAll()
            .then((categories) => {
                return res.send(categories);
            });
    });
};

module.exports = { attachTo };

/*
how to choose category
where and how to update the category
*/
