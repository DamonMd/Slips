'use strict';

angular.module('slips').factory('Slips', ['$resource',
	function($resource) {
		return $resource('slips/:slipId', { slipId: '@_id'},
		{
			update: {
				method: 'PUT'
			}
		});
	}
]);
