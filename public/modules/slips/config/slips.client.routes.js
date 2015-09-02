'use strict';

//Setting up route
angular.module('slips').config(['$stateProvider',
	function($stateProvider) {
		// Slips state routing
		$stateProvider.
		state('slips', {
			url: '/slips',
			templateUrl: 'modules/slips/views/slips.client.view.html'
		}).
		state('createSlip', {
			url: '/slips/create',
			templateUrl: 'modules/slips/views/create-slip.client.view.html'
		}).
		state('viewSlip', {
			url: '/slips/:slipId',
			templateUrl: 'modules/slips/views/view-slip.client.view.html'
		}).
		state('editSlip', {
			url: '/slips/:slipId/edit',
			templateUrl: 'modules/slips/views/edit-slip.client.view.html'
		});
	}
]);
