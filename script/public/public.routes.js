(function () {
    'use strict';

    angular.module('public').config(routeConfig);

    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                absract: true,
                templateUrl: 'script/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'script/public/home/home.html'
            })
            .state('public.menu', {
                url: '/menu',
                templateUrl: 'script/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve: {
                    menuCategories: ['MenuService', function (MenuService) {
                        return MenuService.getCategories();
                    }]
                }
            })
            .state('public.menuitems', {
                url: '/menu/{category}',
                templateUrl: 'script/public/menu-items/menu-items.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve: {
                    menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            })

            .state('public.myInfo', {
                url: '/myInfo',
                templateUrl: 'script/public/registration/my-info.html',
                controller: 'myInfoController',
                controllerAs: 'myInfoCtrl',
                resolve: {
                    UserInfo: ['RegistrationService', function (RegistrationService) {
                        return RegistrationService.getUser();
                    }]
                }
            })

            .state('public.signUp', {
                url: '/signUp',
                templateUrl: 'script/public/registration/sign-up.html',
                controller: 'SignUpController',
                controllerAs: 'signUpCtrl'
            })

            .state('public.thankYouSignUp', {
                url: '/ThankYou',
                templateUrl: 'script/public/registration/thankYouSignUp.html'
            });
    }
})();
