'use strict';
var app = angular.module('app');
app.directive("pageList", function ($parse) {
    return {
        restrict: 'EA',
        replace: true,
        scope: {},
        // require:"ngModel",
        templateUrl: "../../views/directiveHtml/pagelist.html",
        link: function (scope, element, attrs) {
            scope.$parent.$watch(attrs.pages, function (value) {
                scope.init = function () {
                    scope.pagelist = [];
                    scope.index = 1;
                    if (value) {
                        scope.page = $parse(attrs.pages)(scope.$parent);
                        scope.singlepage = $parse(attrs.singlepage)(scope.$parent);
                        scope.pages = Math.ceil(scope.page / scope.singlepage);
                        for (var i = 0; i < scope.pages; i++) {
                            scope.pagelist.push({name: i + 1});
                        }
                        scope.toPage = function (index) {
                            scope.index = index;
                            scope.$emit("index", index)
                        };
                        scope.previous = function () {
                            if (scope.index > 1) {
                                scope.index = scope.index - 1;
                                scope.$emit("index", scope.index)
                            }
                        };
                        scope.next = function () {
                            if (scope.index < scope.pagelist.length) {
                                scope.index = scope.index + 1;
                                scope.$emit("index", scope.index)
                            }
                        };
                    }
                };
                scope.init();
            });
        }
    };
});