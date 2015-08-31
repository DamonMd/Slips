'use strict';

//Setting up route
angular.module('slips').config(['$stateProvider',
	function($stateProvider) {
		// Slips state routing
		$stateProvider.
		state('slips', {
			url: '/slips',
			templateUrl: 'modules/slips/views/slips.client.view.html'
		});
	}
]);