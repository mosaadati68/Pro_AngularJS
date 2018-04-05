myApp.controller("HomeController", function ($scope, $timeout, $http) {
    // $timeout(function () {
    $http.get("todo.json").then(function (response) {
            products: response.data
        };
    }, function (error) {
        $scope.data = {
            error: error
        };
    });
    // }, 1000);


    // $scope.todos = model;
    // $scope.incompleteCount = function () {
    //     var count = 0;
    //     angular.forEach($scope.todos.items, function (item) {
    //         if (!item.done) { count++ }
    //     });
    //     return count;
    // }
    // $scope.warningLevel = function () {
    //     return $scope.incompleteCount() < 3 ? "badge-success" : " badge-warning";
    // }
    // $scope.addNewItem = function (actionText) {
    //     $scope.todo.items.push({ action: actionText, done: false });
    // }
});