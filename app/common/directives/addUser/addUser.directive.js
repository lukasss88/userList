(function () {
    'use strict';
    function AddUserDirective(UserService, $location)
    {
        function controller()
        {

            var ctrl = this;
            function addUser(form)
            {
                if (form.$valid) {
                    UserService.addUser(ctrl.user).then(function() {
                        $location.path('/');
                    });
                } else {
                    ctrl.invalidFormAlert = true;
                    ctrl.addComp = false;
                }
            }
            function back(){
                $location.path('/');
            }

            ctrl.addUser = addUser;
            ctrl.back = back;
        }

        return {
            restrict: 'EA',
            replace: true,
            transclude: true,
            templateUrl: '/common/directives/addUser/addUserDirective.tpl.html',
            controller: controller,
            controllerAs: 'addUserDCtrl',
            css: '/common/directives/addUser/addUserDirective.style.css'
        };
    }

    angular.module('app').directive('addUser', ['UserService','$location', AddUserDirective]);

})();
