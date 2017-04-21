(function() {
    'use strict';
    function AlbumService($http){

        function getItems(){

            return $http.get('https://jsonplaceholder.typicode.com/photos').then(function(response){
                return response.data;
            });
        }

        return {
            getItems: getItems
        };
    }

    angular.module('app').factory('AlbumService', ['$http', AlbumService]);
})();
