var app = angular.module('mtgApp',['ngResource']);

app.controller('mtgCtrl', ['$scope', '$http','$compile', function($scope, $http, $compile){
	// load ids
	$scope.showCard = false;
	$scope.showDeck = false;
	$scope.showRoot = true;
	$scope.showStats = false;
	var MTGJSON = $http.get('mtg.json');
	MTGJSON.success(function(data, status) {
		$scope.root = data;
	})
	.error(function(data, status) {
		$scope.root = "";
	});
	
	$scope.backRootView = function(){
		$scope.showRoot = true;
		$scope.showDeck = false;
	}
	$scope.selectEdition = function(node){
		$scope.showRoot = false;
		$scope.showDeck = true;
		var code = node.code;
		$scope.cards = $scope.root[code].cards;
	}
	
	$scope.backDeckView = function(){
		$scope.showCard = false;
		$scope.showDeck = true;
	}
	$scope.selectCard = function(card){
		$scope.showCard = true;
		$scope.showDeck = false;
		
		$scope.cardName = card.name;

		if(card.power != null)
		{
			$scope.cardPower = card.power;
			$scope.cardToughness = card.toughness;
			$scope.cardSlash = "/"
			if($scope.dChart!=undefined)
			{
				$scope.dChart.remove();
				$scope.dChart=undefined;
			}
			if($scope.bChart!=undefined)
			{
				$scope.bChart.remove();
				$scope.bChart=undefined;
			}
			var chart = angular.element(document.createElement('donut-chart'));
			chart.attr('data',"["+card.power+","+card.toughness+"]");
			var el = $compile( chart )( $scope );
			angular.element(document.getElementById('dchart')).append(chart);
			$scope.dChart = chart;
			
			var barChart = angular.element(document.createElement('bar-chart'));
			barChart.attr('data',"["+card.power+","+card.toughness+"]");
			var el = $compile( barChart )( $scope );
			angular.element(document.getElementById('bchart')).append(barChart);
			$scope.bChart = barChart;
			
			$scope.showStats = true;
		}
		else
		{
			$scope.cardPower = "";
			$scope.cardToughness = "";
			$scope.cardSlash = "";
			$scope.cardDonut = "";
			if($scope.dChart!=undefined)
			{
				$scope.dChart.remove();
				$scope.dChart=undefined;
			}
			if($scope.bChart!=undefined)
			{
				$scope.bChart.remove();
				$scope.bChart=undefined;
			}
			$scope.showStats = false;
		}
		$scope.cardDesc = card.text;
		$scope.cardFlavor = card.flavor;
		$scope.cardType = card.type;
		$scope.cardCost = card.manaCost;
		$scope.cardId = card.multiverseid;
	}
}]);