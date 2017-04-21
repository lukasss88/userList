(function () {
    'use strict';
    function Capitalize()
    {
        return function(input) {
            return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
        };
    }

    angular.module('app').filter('Capitalize', ['$filter', Capitalize]);

})();

