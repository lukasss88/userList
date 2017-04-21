(function(){
    'use strict';
    function UserListController(UserService, $location){

        var ctrl = this;

        ctrl.usersList = UserService.usersList;

        ctrl.changeView = function(){
            $location.path('/addUser');
        };
    }

    angular.module('app').controller('UserListController', ['UserService','$location', UserListController]);

})();
