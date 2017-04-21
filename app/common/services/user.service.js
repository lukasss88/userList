(function(){
    'use strict';
    function UserService($q){

        var ctrl = this;

        ctrl.usersList = [
            {firstName: 'Daniel', lastName: 'Olbrychski', username: 'daniel1233', age: 72},
            {firstName: 'Bogusław', lastName: 'Linda', username: 'linda55', age: 64},
            {firstName: 'Marek', lastName: 'Konrad', username: 'mk23', age: 66},
            {firstName: 'Piotr', lastName: 'Adamczyk', username: 'piotr354', age: 45},
            {firstName: 'Borys', lastName: 'Szyc', username: 'borys321', age: 38},
            {firstName: 'Marcin', lastName: 'Dorociński', username: 'marcin_321', age: 43},
            {firstName: 'Cezary', lastName: 'Pazura', username: 'czarek123', age: 54},
            {firstName: 'Janusz', lastName: 'Gajos', username: 'jan1233', age: 77},
            {firstName: 'Artur', lastName: 'Barciś', username: 'artur76', age: 55}
        ];

        ctrl.addUser = function(user){
            var q = $q.defer();
            setTimeout(function() {
                q.resolve(ctrl.usersList.push(user));
            }, 100);
            return q.promise;
        };
    }

    angular.module('app').service('UserService',['$q', UserService]);

})();
