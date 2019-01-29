(function() {
    'use strict'; 
    
    angular.module('testeMercadoLivre')
        .controller('ItemController', ItemController);


    ItemController.$inject = ['$state', 'ItemService'];
    function ItemController($state, Service) {
        var vm = this;

        function buscaItem() {
            Service.obterItem(vm.id).then(function(response) {
                vm.item = response.data;
            });
        }

        function obterUrlParams() {
            if (!$state.params.id) { return; } 

            vm.id = $state.params.id;
            buscaItem();
        }

        //init
        function init() {
            obterUrlParams()
        }

        init();
    }

})();
