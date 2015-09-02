'use strict';

module.exports = function(app) {
	var slips = require('../../app/controllers/slips.server.controller');
	var users = require('../../app/controllers/users.server.controller');

	// Routing logic
	app.route('/slips')
		.get(slips.list)
		.post(users.requiresLogin, slips.create);

	app.route('/slips/:slipId')
		.get(slips.read)
		.put(users.requiresLogin, slips.update)
		.delete(users.requiresLogin, slips.delete);

	app.param('slipId', slips.slipByID);

};
//
// 'use strict';
//
// module.exports = function(app) {
// 	// Routing logic goes here
// 	var slips = require('../../app/controllers/slips.server.controller');
// 	var users = require('../../app/controllers/users.server.controller');
//
// 	//index
// 	app.route('/slips')
// 		.get(slips.list)
// 	//create
// 		.post(users.requiresLogin, slips.create);
// 	//show
// 	app.route('/slips/:slipId')
// 		.get(slips.read)
// 	//update
// 		.put(users.requiresLogin, slips.update)
// 	//destroy
// 		.delete(users.requiresLogin, slips.delete);
//
// 	// Finish by binding the article middleware
// 	// What's this? Where the slipId is present in the URL
// 	// the logic to 'get by id' is handled by this single function
// 	// and added to the request object i.e. request.slip.
// 	app.param('slipId', slips.slipByID);
//
// };
