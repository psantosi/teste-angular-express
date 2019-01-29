(function() {
    'use strict'; 
    
    angular.module('testeMercadoLivre')
        .factory('ItensService', ItensService);


    ItensService.$inject = ['$http'];
    function ItensService($http) {
        var urlBase = 'http://localhost:3000/api/',
        service = {
            listaItens: listaItens
        }

        return service;

        function listaItens(params) {
            return $http({
                method: 'GET',
                url: urlBase + 'items',
                params: params
            });
        }
    }

})();
