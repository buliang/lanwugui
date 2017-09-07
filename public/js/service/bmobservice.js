(function (app) {
    'use strict';
    app.factory('bmobYaoMing', function ($window) {
        Bmob.initialize("ca44d77d5c0fd9ad45ef4a184e069943", "74fdc85b8fdefa92ba058cb6c9ee7be7");
        var Yao = Bmob.Object.extend("yaoming");

        return {
            //获取最近更新的药
            getAllLastYao: function (callback) {
                var query = new Bmob.Query(Yao);
                // 查询所有数据
                query.find({
                    success: function(results) {
                        callback(results);
                    },
                    error: function(error) {
                        alert("查询失败: " + error.code + " " + error.message);
                    }
                });
            },
            //获取单个药详情
            getSingleExp:function (keyWord,callback) {
                var query = new Bmob.Query(Yao);
                query.equalTo("name",keyWord);
                query.first({
                    success: function(object) {
                        var relation = object.relation("pictures");
                        relation.query().find({
                            success:function (list) {
                                // 查询成功
                                for(var i=0;i<list.length;i++){
                                    if(list[i].attributes.file._url){
                                        list[i].attributes.file._url= list[i].attributes.file._url.substring(20);
                                    }
                                }
                                callback(object,list);
                            },
                            error:function (error) {
                                alert("查询失败: " + error.code + " " + error.message);
                            }
                        });


                    },
                    error: function(error) {
                        alert("查询失败: " + error.code + " " + error.message);
                    }
                });
            },
            //统计药物个数
            getCount:function (callback) {
                var query = new Bmob.Query(Yao);
                query.count({
                    success: function(count) {
                        // 查询成功，返回记录数量
                        callback(count);
                    },
                    error: function(error) {
                        // 查询失败
                        console.log(error.message);
                    }
                });
            },
            //fanye
            openPage:function (index,singlePage,callback) {
                var query = new Bmob.Query(Yao);
                query.limit(singlePage);
                query.skip((index-1)*singlePage);
                query.find(
                    {
                        success:  function (results) {
                            for(var i=0;i<results.length;i++){
                                if(results[i].attributes.picture._url){
                                    results[i].attributes.picture._url= results[i].attributes.picture._url.substring(20);
                                }
                            }
                            callback(results);
                        },
                        error: function(error) {
                            alert("查询失败: " + error.code + " " + error.message);
                        }
                    }
                   );
            }
            ,
            getYaoByName:function (yaoming,callback) {
                var query = new Bmob.Query(Yao);
                query.equalTo("name", yaoming);
                query.find(
                    {
                        success:  function (results) {
                            for(var i=0;i<results.length;i++){
                                if(results[i].attributes.picture._url){
                                    results[i].attributes.picture._url= results[i].attributes.picture._url.substring(20);
                                }
                            }
                            callback(results);
                        },
                        error: function(error) {
                            alert("查询失败: " + error.code + " " + error.message);
                        }
                    }
                );
            }
        }
    });
})
(angular.module('app'));