
分页指令
 <div page-list="" pages="couts" singlepage="single" ng-model="obj"></div>

 pages:总页数
 single：一页多少个


  scope.$parent.$watch  监听属性是否变化

  todo
  scope.$emit("index",index);当前页；

  $scope.$on("index",function(event,data){
    //data ======= index
  });