(function (app) {
    'use strict';
    app.controller('allZhongYaoController', function ($scope,bmobYaoMing) {
        $scope.loading=false;
        $scope.single = 8;
        $scope.init = function (a,b) {
            bmobYaoMing.openPage(a, b,function (results) {
                $scope.$apply(function () {
                    $scope.loading=true;
                    $scope.list=results;
                });

            });
        };
        $scope.init(1,$scope.single);

        bmobYaoMing.getCount(function (result) {
            $scope.$apply(function () {
                $scope.couts = result;
            });

        });
        $scope.search=function () {
            $scope.loading=false;
            bmobYaoMing.getYaoByName($scope.yaoming,function (result) {

                $scope.$apply(function () {
                    if(result.length>0){
                        $scope.couts = result.length;
                        $scope.list=result;

                    }else{
                        $scope.couts = 1;
                        $scope.nothing=true;
                       // $scope.list=result;
                    }
                    $scope.loading=true;
                });
            });
        };
         $scope.all=function () {
             $scope.nothing=false;
             $scope.loading=false;
             $scope.init(1,$scope.single);
         };

        $scope.$on("index",function (event,data) {
            $scope.init(data,$scope.single);
        })

    });
})(angular.module('app'));