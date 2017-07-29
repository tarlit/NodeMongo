const init = (data) => {
    const controller = {
        getAll(req, res) {
            return data.items.getAll()
                .then((items) => {
                    return res.render('items/all', {
                        items,
                    });
                });
        },
        getCreateForm(req, res) {
            return res.render('items/form');
        },
        createItem(req, res) {
            const item = req.body;

            // validate item
            return data.items.create(item)
                .then(() => {
                    return res.redirect('/items');
                })
                .catch((err) => {
                    req.flash('error', err);
                    return res.redirect('/items/form');
                });
        },
    };

    return controller;
};


module.exports = { init };
