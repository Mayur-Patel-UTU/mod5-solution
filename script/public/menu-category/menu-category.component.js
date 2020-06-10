(function () {
    "use strict";

    angular.module('public')
        .component('menuCategory', {
            templateUrl: 'script/public/menu-category/menu-category.html',
            bindings: {
                category: '<'
            }
        });
})();
