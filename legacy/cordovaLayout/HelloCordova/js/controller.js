var angularApp = angular.module('angularApp',[]);

angularApp.controller('angularAppCtrl',['$scope','$http', function($scope, $http)
{
	$scope.state = 0;
	$scope.TITLE = "Home";
	$scope.navHome = function(){$scope.state = 0;$scope.TITLE="Home";}
	$scope.navPage1 = function(){$scope.state = 1;$scope.TITLE="Page1";}
	$scope.navPage2 = function(){$scope.state = 2;$scope.TITLE="Page2";}
	
}]);