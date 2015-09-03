'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

function validateLength (slip){
	return slip.length <= 20;
}
/**
 * Slip Schema
 */
var SlipSchema = new Schema({
	// Slip model fields
	created:{
		type: Date,
		default: Date.now
	},
	//title
	title:{
		type: String,
		default: '',
		trim: true,
		required: 'cannot be blank',
		validate: [validateLength, 'title must be 15 characters or less']
	},
	//category
	category:{
		type: String,
		default: '',
		trim: true,
		required: 'cannot be blank'
	},

	//issue or question
	issue: {
		type: String
	},
	//description or answer
	solution:{
		type: String
	},
	//user
	createdBy:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}

});

mongoose.model('Slip', SlipSchema);
