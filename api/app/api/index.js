var request = require('request');

var api = {},
    $access_token = 'APP_USR-2728478313083364-012918-7b427e720640c4525eb82d396d9a5897-223232503';

api.listar = function(req, res) {
    request({
        uri: 'https://api.mercadolibre.com/sites/MLA/search?q='+ req.q + '&limit=4&access_token=' + $access_token,
        qs: {
            limit: 4
        }
    }).pipe(res);
};

api.listarPorId = function(req, res) {
    request({
        uri: 'https://api.mercadolibre.com/items/' + req.params.id
    }).pipe(res);
};

api.listarPorIdDescricao = function(req, res) {
    request({
        uri: 'https://api.mercadolibre.com/items/' + req.params.id + '/description'
    }).pipe(res);
};

module.exports = api;