(function(){
    'use strict';
    function config($routeProvider) {

        $routeProvider.when('/', {
           templateUrl: 'modules/userList/userList.tpl.html',
           controller: 'UserListController',
           controllerAs: 'listCtrl',
           css: 'modules/userList/userList.style.css'
        });

        $routeProvider.when('/addUser', {
            templateUrl: 'modules/addUser/addUser.tpl.html',
            controller: 'AddUserController',
            controllerAs: 'addCtrl',
            css: 'modules/addUser/addUser.style.css'
        });

        $routeProvider.when('/album', {
            templateUrl: 'modules/album/album.tpl.html',
            controller: 'AlbumController',
            controllerAs: 'albumCtrl',
            css: 'modules/album/album.style.css'
        }).otherwise({redirectTo: '/'});

    }

    angular.module('app').config(config);

})();
