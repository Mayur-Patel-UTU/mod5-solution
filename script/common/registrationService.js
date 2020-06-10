(function () {
    "use strict";

    angular.module('common').service('RegistrationService', RegistrationService);

    RegistrationService.$inject = ['$http', 'ApiPath', '$q'];

    function RegistrationService($http, ApiPath, $q) {
        var service = this;
        service.user = [];

        service.CheckIfDishValid = function (favDish) {
            return $http.get(ApiPath + '/menu_items/' + favDish + '.json')
                .then(
                function (response) {
                    return {
                        data: response.data
                    };
                })
                .catch(function (error) {
                    console.log("Something went wrong !");
                });
        }

        service.AddUserData = function (userDetailArray) {
            service.user.push(userDetailArray[0]);
        }

        service.getUser = function () {
            if (service.user.length > 0) {
                return service.user[0];

            }
        }
    }
})();
