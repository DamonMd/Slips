'use strict';

angular.module('slips').controller('SlipsController', ['$scope', '$stateParams', '$location', 'Slips', 'Authentication',
	function($scope, $stateParams, $location, Slips, Authentication) {
		// Controller Logic

		$scope.authentication = Authentication;

		//Create a new Slip
		$scope.create = function(){
			var slip = new Slips({
				title: this.title,
				category: this.category,
				issue: this.issue,
				solution: this.solution
			});
			//save and redirect
			slip.$save(function(response){
				$location.path('/slips' + response._id);
				$scope.title = '';
			}, function(errorResponse){
				$scope.error = errorResponse.data.message;
			});
		};

		//Find full list of Slips
		$scope.find = function(){
			$scope.slips = Slips.query();
		};

		// Remove existing Slip
		$scope.remove = function(slip) {
			if ( slip ) {
				slip.$remove();

				for (var i in $scope.slips) {
					if ($scope.slips [i] === slip) {
						$scope.slips.splice(i, 1);
					}
				}
			} else {
				$scope.slip.$remove(function() {
					$location.path('slips');
				});
			}
		};

		//update an existing slip
		$scope.update = function(){
			var slip = $scope.slip;

			slip.$update(function(){
				$location.path('/slips/' + slip._id);
			}, function(errorResponse){
				$scope.error = errorResponse.data.message;
			});
		};

		//find a specific Slip
		$scope.findOne = function(){
			$scope.slip = Slips.get({
				slipId: $stateParams.slipId
			});
		};


	}
]);
