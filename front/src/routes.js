(function () {
  'use strict';

  angular.module('testeMercadoLivre')
    .config(routes);

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

  function routes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('busca', {
        url: '/',
        templateUrl: './dist/templates/features/busca/templates/busca-template.html',
        controller: 'BuscaController as vm'
      })
      .state('items', {
        url: '/items?search',
        views: {
          '@': {
            templateUrl: './dist/templates/features/busca/templates/busca-template.html',
            controller: 'BuscaController as vm',
          },
          'view-itens@items': {
            templateUrl: './dist/templates/features/itens/templates/itens-template.html',
            controller: 'ItensController as vm'
          },
        }
      })
      .state('item', {
        url: '/items/:id',
        views: {
          '@': {
            templateUrl: './dist/templates/features/busca/templates/busca-template.html',
            controller: 'BuscaController as vm',
          },
          'view-item@item': {
            templateUrl: './dist/templates/features/item/templates/item-template.html',
            controller: 'ItemController as vm'
          },
        }
      });

    return $urlRouterProvider.otherwise('/');
  }

})();