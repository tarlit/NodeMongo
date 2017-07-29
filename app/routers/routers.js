/* globals __dirname */

const fs = require('fs');
const path = require('path');

const attachTo = (app, data) => {
    // generic(dynamic) router
    // app.use(new ModelRouter(Item).getRouter());

    app.get('/', (req, res) => {
        return res.render('home/home');
    });

    fs.readdirSync(__dirname)
        .filter((file) => file.includes('.router'))
        .forEach((file) => {
            const modulePath = path.join(__dirname, file);
            require(modulePath).attachTo(app, data);
        });
};

module.exports = { attachTo };
