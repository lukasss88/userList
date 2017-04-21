(function () {
    'use strict';
    function ItemFilter($filter)
    {
        return function(collection, page, numPerPage) {
            // page - numer strony
            // numPerPage - ilość elementów wyświetlanych na stronie
            var view = page *numPerPage;
            collection = collection.slice(page);
            return $filter('limitTo')(collection, numPerPage);
        };
    }

    angular.module('app').filter('ItemFilter', ['$filter', ItemFilter]);

})();
