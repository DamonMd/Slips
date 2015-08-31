'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    Slip = mongoose.model('Slip');

/**
 * Create a Slip
 */
exports.create = function(req, res) {
  var slip = new Slip(req.body);

  slip.save(function(err){
    if(err){
      return res.status(400).send((err));
    } else{
      res.json(slip);
    }
  });
};

/**
 * Show the current Slip
 */
exports.read = function(req, res) {

};

/**
 * Update a Slip
 */
exports.update = function(req, res) {

};

/**
 * Delete an Slip
 */
exports.delete = function(req, res) {

};

/**
 * List of Slips
 */
exports.list = function(req, res) {
  Slip.find().exec(function(err, slips){
    if(err){
      return res.status(400).send((err));
    } else {
      res.json(slips);
    }
  });

};
