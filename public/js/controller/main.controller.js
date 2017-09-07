(function (app) {
    'use strict';
    app.controller('MainController', function ($rootScope,$scope,bmobYaoMing) {

        $rootScope.title = 'Lazy Tortoise';
        $scope.loading=false;
        $scope.lastYao=[];
        bmobYaoMing.getAllLastYao(function (result) {
           $scope.loading=true;
           $scope.lastYao = result;

            for(var i=0;i<$scope.lastYao.length;i++){
                if($scope.lastYao[i].attributes.picture._url){
                    $scope.lastYao[i].attributes.picture._url= $scope.lastYao[i].attributes.picture._url.substring(20)
                }
            }
           $scope.$apply();

           console.log( $scope.lastYao);
       });
    });
})(angular.module('app'));