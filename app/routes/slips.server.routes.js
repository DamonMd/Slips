'use strict';

module.exports = function(app) {
	var slips = require('../../app/controllers/slips.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	// Routing logic
	app.route('/slips')
		.get(slips.list)
		.post(users.requiresLogin, slips.create);

	app.route('slips/:slipsId')
		.get(slips.read)
		.put(users.requiresLogin, slips.update)
		.delete(users.requiresLogin, slips.delete);

	// app.param('slipsId', slips.slipByID);

};
