(function() {
    'use strict'; 
    
    angular.module('testeMercadoLivre')
        .controller('ItensController', ItensController);


    ItensController.$inject = ['ItensService', '$state'];
    function ItensController(Service, $state) {
        var vm = this;

        vm.irParaDescricao = function(id) {
            $state.go('item', {id: id});
        }

        function buscaItens() {
            var params = {
                q: vm.search
            }

            Service.listaItens(params).then(function(response) {
                vm.itens = response.data.results;
            });
        }

        function obterUrlParams() {
            if (!$state.params.search) { return; } 

            vm.search = $state.params.search;
            buscaItens();
        }

        //init
        function init() {
            obterUrlParams()
        }

        init();
    }

})();
