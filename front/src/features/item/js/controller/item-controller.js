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

        function buscaDescricao() {
            Service.obterDescricao(vm.id).then(function(response) {
                vm.descricao = response.data;
                console.log(vm.descricao);
            });
        }

        function obterUrlParams() {
            if (!$state.params.id) { return; } 

            vm.id = $state.params.id;
            buscaItem();
            buscaDescricao();
        }

        //init
        function init() {
            obterUrlParams()
        }

        init();
    }

})();
