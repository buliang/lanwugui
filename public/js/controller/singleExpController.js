(function (app) {
    'use strict';
    app.controller('singleExpController', function ($scope, $stateParams,bmobYaoMing) {
        $scope.loading=false;
        bmobYaoMing.getSingleExp($stateParams.keyWord,function (result,list) {
            $scope.loading=true;
            $scope.yao = result.attributes;
            $scope.pictures = list;
            $scope.$apply();
        });

    });
})(angular.module('app'));