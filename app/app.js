'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    // $locationProvider.hashPrefix('!');
    $routeProvider.when("/complete", {
        templateUrl: "views/thankYou.html"
    });
    $routeProvider.when("/placeorder", {
        templateUrl: "views/placeOrder.html"
    });
    $routeProvider.when("/checkout", {
        templateUrl: "views/checkoutSummary.html"
    });
    $routeProvider.when("/products", {
        templateUrl: "views/productList.html"
    });
    $routeProvider.otherwise({
        templateUrl: "views/productList.html"
    });
}]);

// myApp.filter("checkedItems", function () {
//     return function (items, showComplete) {
//         var resultArr = [];
//         angular.forEach(items, function (item) {
//             if (item.done == false || showComplete == true) {
//                 resultArr.push(item);
//             }
//         });
//         return resultArr;
//     }
// });
