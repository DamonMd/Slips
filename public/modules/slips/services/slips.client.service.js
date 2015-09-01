'use strict';

angular.module('slips').factory('Slips', ['$resource',
	function($resource) {
		return $resource('slips/:slipsId', {slipsId: '@_id'}, {update: {method: 'PUT'}});
		}
]);
