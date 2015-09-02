// 'use strict';
//
// /**
//  * Module dependencies.
//  */
// var mongoose = require('mongoose'),
//     errorHandler = require('./errors.server.controller'),
//     Slip = mongoose.model('Slip'),
//     _ = require('lodash');
//
// /**
//  * Create a Slip
//  */
// exports.create = function(req, res) {
//   var slip = new Slip(req.body);
//
//   slip.save(function(err){
//     if(err){
//       return res.status(400).send((err));
//     } else{
//       res.json(slip);
//     }
//   });
// };
//
// /**
//  * Show the current Slip
//  */
// exports.read = function(req, res) {
//   Slip.findById(req.params.slipId).exec(function(err, slip){
//     if(err){
//       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
//     } else {
//       if(!slip){
//         return res.status(404).send({
//           message: 'Slip not found'
//         });
//       }
//       res.json(slip);
//     }
//   });
// };
//
// /**
//  * Update a Slip
//  */
// exports.update = function(req, res) {
//   var slip = req.slip;
//
//   slip = _.extend(slip, req.body);
//
//   slip.save(function(err){
//     if(err){
//       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
//     } else {
//       res.json(slip);
//     }
//   });
// };
//
// /**
//  * Delete an Slip
//  */
// exports.delete = function(req, res) {
//   var slip = req.slip;
//
//   slip.remove(function(err){
//     if(err){
//       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
//     } else {
//       res.json(slip);
//     }
//   });
// };
//
// /**
//  * List of Slips
//  */
//  exports.list = function(req, res) {
//      Slip.find().exec(function(err, slips) {
//          if (err) {
//              return res.status(400).send({
//                  message: errorHandler.getErrorMessage(err)
//              });
//          } else {
//              res.json(slips);
//          }
//      });
//  };
//
// exports.slipByID = function(req, res, next, id) {
//
// 	if (!mongoose.Types.ObjectId.isValid(id)) {
// 		return res.status(400).send({
// 			message: 'Slip is invalid'
// 		});
// 	}
//
// 	Slip.findById(id).exec(function(err, slip) {
// 		if (err) return next(err);
// 		if (!slip) {
// 			return res.status(404).send({
//   				message: 'Slip not found'
//   			});
// 		}
// 		req.slip = slip;
// 		next();
// 	});
// };

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    _ = require('lodash'),
    errorHandler = require('./errors.server.controller'),
    Slip = mongoose.model('Slip');


/**
 * Create a Category
 */

exports.create = function(req, res) {
  var slip = new Slip(req.body);

  slip.save(function(err){
    if(err){
      return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
    } else {
      res.status(201).json(slip);
    }
  });

};

/**
 * Show the current Category
 */
 exports.read = function(req, res) {
   Slip.findById(req.params.slipId).exec(function(err, slip){
     if(err){
       return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
     } else {
       if(!slip){
         return res.status(404).send({
           message: 'slip not found'
         });
       }
       res.json(slip);
     }
   });
 };

/**
 * Update a Category
 */
exports.update = function(req, res) {
  var slip = req.slip;

  slip = _.extend(slip, req.body);

  slip.save(function(err){
    if(err){
      return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
    } else {
      res.json(slip);
    }
  });
};

/**
 * Delete an Category
 */
exports.delete = function(req, res) {
  var slip = req.slip;

  slip.remove(function(err){
    if(err){
      return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
    } else {
      res.json(slip);
    }
  });
};

/**
 * List of Categories
 */
exports.list = function(req, res) {
  Slip.find().exec(function(err, categories){
    if(err){
      return res.status(400).send({ message: errorHandler.getErrorMessage(err)});
    } else {
      res.json(categories);
    }
  });
};

/**
 * Category middleware
 */
exports.slipByID = function(req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'slip is invalid'
		});
	}

	Slip.findById(id).exec(function(err, slip) {
		if (err) return next(err);
		if (!slip) {
			return res.status(404).send({
  				message: 'slip not found'
  			});
		}
		req.slip = slip;
		next();
	});
};
