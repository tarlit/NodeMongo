const attachTo = (app, data) => {
    const controller = require('../controllers/items-controller').init(data);

    app.get('/items', (req, res) => {
        // auth
        return controller.getAll(req, res);

        // return data.items.getAll()
        //     .then((items) => {
        //         return res.render('items/all', {
        //             items,
        //         });
        //     });
    });

    app.get('/items/form', (req, res) => {
        return controller.getCreateForm(req, res);
    });

    app.post('/items', (req, res) => {
        return controller.createItem(req, res);
    });

    // app.get('/items/form', (req, res) => {
    //     return res.render('items/form');
    // });

    // app.post('/items', (req, res) => {
    //     const item = req.body;

    //     // validate item
    //     return data.items.create(item)
    //         .then(() => {
    //             return res.redirect('/items');
    //         })
    //         .catch((err) => {
    //             req.flash('error', err);
    //             return res.redirect('/items/form');
    //         });
    // });
};

module.exports = { attachTo };
