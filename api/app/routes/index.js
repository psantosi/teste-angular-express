var api = require('../api');

module.exports  = function(app) {

    app.route('/api/items')
        .get(api.listar);

    app.route('/api/items/:id')
        .get(api.listarPorId);
};