(function (app) {
    'use strict';
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/main');
        $stateProvider
            .state('main', {
                abstract: 'true',
                templateUrl: '/views/menu.html'
            })
            .state('main.home', {
                url: '/main',
                controller: 'MainController',
                templateUrl: '/views/main.html'
            })
            //单个药物详细
    .state('main.singleExp', {
             params:{keyWord:null}       ,
            url: '/singleExp/:keyWord',
            controller: 'singleExpController',
            templateUrl: '/views/singleExp.html'
        })
            //全部
            .state('main.allZhongYao', {
                url: '/allZhongYao',
                controller: 'allZhongYaoController',
                templateUrl: '/views/allZhongYao.html'
            });




    });
})(angular.module('app'));