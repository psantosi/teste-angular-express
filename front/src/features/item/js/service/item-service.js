(function() {
    'use strict'; 
    
    angular.module('testeMercadoLivre')
        .factory('ItemService', ItemService);


    ItemService.$inject = ['$http'];
    function ItemService($http) {
        var urlBase = 'http://localhost:3000/api/',
        service = {
            obterItem: obterItem,
            obterDescricao: obterDescricao
        }

        return service;

        function obterItem(id) {
            return $http({
                method: 'GET',
                url: urlBase + 'items/' + id
            });
        }

        function obterDescricao(id) {
            return $http({
                method: 'GET',
                url: urlBase + 'items/' + id + '/description'
            });
        }
    }

})();
