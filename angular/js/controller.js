var app = angular.module('marvelApp',['ngResource']);

app.controller('MarvelCtrl', ['$scope', '$http', function($scope, $http){
	// load ids
	var Characters = $http.get('characters.json');
	Characters.success(function(data, status) {
		$scope.characters = data.data;
	})
	.error(function(data, status) {
		$scope.characters = "";
	});
	
	$scope.toggle = true;
	$scope.toggleView = function(){
		$scope.toggle = !$scope.toggle;
	}
	$scope.selectCharacter = function(character){
		$scope.toggle = !$scope.toggle;
		var selChar = $http.get('http://gateway.marvel.com/v1/public/characters/'+character.id+'?apikey=4ded5b523934ed9add710e6bd9192105&hash=c80bfee836456920c93e89d98a688465&ts=1');
		selChar.success(function(data, status) {
			$scope.name = data.data.results[0].name;
			$scope.thumbnail = data.data.results[0].thumbnail.path+"."+data.data.results[0].thumbnail.extension;
			$scope.description = data.data.results[0].description;
		})
		.error(function(data, status) {
			$scope.name = "";
			$scope.thumbnail="";
			$scope.description="";
		});
	}
	

}]);