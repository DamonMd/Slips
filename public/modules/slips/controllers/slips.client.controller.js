// 'use strict';
//
// angular.module('slips').controller('SlipsController', ['$scope', '$stateParams', '$location', 'Slips', 'Authentication',
// 	function($scope, $stateParams, $location, Slips, Authentication) {
// 		// Controller Logic
//
// 		$scope.authentication = Authentication;
//
// 		//Create a new Slip
// 		$scope.create = function(){
// 			var slip = new Slips({
// 				title: this.title,
// 				category: this.category,
// 				issue: this.issue,
// 				solution: this.solution
// 			});
// 			//save and redirect
// 			slip.$save(function(response){
// 				$location.path('/slips' + response._id);
// 				$scope.title = '';
// 			}, function(errorResponse){
// 				$scope.error = errorResponse.data.message;
// 			});
// 		};
//
// 		//Find full list of Slips
// 		$scope.find = function(){
// 			$scope.slips = Slips.query();
// 		};
//
// 		// Remove existing Slip
// 		$scope.remove = function(slip) {
// 			if ( slip ) {
// 				slip.$remove();
//
// 				for (var i in $scope.slips) {
// 					if ($scope.slips [i] === slip) {
// 						$scope.slips.splice(i, 1);
// 					}
// 				}
// 			} else {
// 				$scope.slip.$remove(function() {
// 					$location.path('slips');
// 				});
// 			}
// 		};
//
// 		//update an existing slip
// 		$scope.update = function(){
// 			var slip = $scope.slip;
//
// 			slip.$update(function(){
// 				$location.path('/slips/' + slip._id);
// 			}, function(errorResponse){
// 				$scope.error = errorResponse.data.message;
// 			});
// 		};
//
// 		//find a specific Slip
// 		$scope.findOne = function() {
// 			$scope.slip = Slips.get({
// 				slipId: $stateParams.slipId
// 			});
// 		};
//
//
// 	}
// ]);

'use strict';

angular.module('slips').controller('SlipsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Slips',
	function($scope, $stateParams, $location, Authentication, Slips) {
		$scope.authentication = Authentication;
		$scope.currentPage = 1;
		$scope.pageSize = 10;
		$scope.offset = 0;

		//Page changed handler
		$scope.pageChanged = function(){
			$scope.offset = ($scope.currentPage -1) * $scope.pageSize;
		};

		//create a new slip
		$scope.create = function(){
			//Create new slip instance
			var slip = new Slips ({
				name: this.name,
				description: this.description
			});
			//redirect after save
			slip.$save(function(response){
				$location.path('slips/' + response._id);
				$scope.name = '';

			}, function(errorResponse){
				$scope.error = errorResponse.data.message;
			});
		};

			//Delete
			$scope.remove = function(slip){
				if(slip){
					slip.$remove();

					for(var i in $scope.slips){
						if($scope.slips[i] === slip){
							$scope.slips.splice(i, 1);
						}
					}
				} else {
						$scope.slip.$remove(function(){
							$location.path('slips');
						});
				}
			};


			//Update
			$scope.update = function(){
				var slip = $scope.slip;

				slip.$update(function(){
					$location.path('slips/' + slip._id);
				}, function(errorResponse){
						$scope.error = errorResponse.data.message;
				});
			};



		//find a list of slips
		$scope.find = function(){
			$scope.slips = Slips.query();
		};

		//find a specific slip
		$scope.findOne = function() {
			$scope.slip = Slips.get({
				slipId: $stateParams.slipId
			});
		};

		//search for a slip
		$scope.slipSearch = function(slip){
			$location.path('slips/' + slip._id);
		};
	}
]);
