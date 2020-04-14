var myApp = angular.module("myApp", []);
myApp.controller("maincntrl", function ($scope) {
$scope.submit_success = false;

var today=new Date();
$scope.today = today.toISOString();

$scope.call = function () {
window.scrollTo(10, 500);
$scope.server = angular.copy($scope.user);
$scope.submit_success = true;

}
}
);
