(function() {
    'use strict'; 
    
    angular.module('testeMercadoLivre')
        .controller('BuscaController', BuscaController);


    BuscaController.$inject = ['ngDialog', '$state'];
    function BuscaController(ngDialog, $state) {
        var vm = this;

        vm.pesquisar = function() {
            if (!vm.search) {
                ngDialog.open({
                    template: '<p>Digite algo para pesquisar</p>',
                    className: 'ngdialog-theme-default',
                    plain: true
                });
                return;
            }

            $state.go('items', {search: vm.search});
        };

        function init() {
            if ($state.current.name === 'items') {
                vm.view = 'view-itens';
            } else if ($state.current.name === 'item') {
                vm.view = 'view-item';
            }
        }

        init();

    }

})();
