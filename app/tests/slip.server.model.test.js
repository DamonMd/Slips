'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
	mongoose = require('mongoose'),
	User = mongoose.model('User'),
	Slip = mongoose.model('Slip');

/**
 * Globals
 */
var user, slip;

/**
 * Unit tests
 */
describe('Slip Model Unit Tests:', function() {
	beforeEach(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password'
		});

		user.save(function() { 
			slip = new Slip({
				// Add model fields
				// ...
			});

			done();
		});
	});

	describe('Method Save', function() {
		it('should be able to save without problems', function(done) {
			return slip.save(function(err) {
				should.not.exist(err);
				done();
			});
		});
	});

	afterEach(function(done) { 
		Slip.remove().exec();
		User.remove().exec();

		done();
	});
});