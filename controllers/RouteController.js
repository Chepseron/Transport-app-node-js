/**
 * Created by Amon on 3/1/2019.
 */
const Route = require('../models/route.model');
const swal = require('sweetalert');
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.index = function (req, res) {
    res.sendfile('index.html');
};

exports.route_create_post = function (req, res) {
	console.log('creating routes');
    let route = new Route(
        {
            driver_id: req.body.driver_id,
            lat: req.body.lat,
            lng: req.body.lng,
            time: Date.now(),
            isDeleted: "0",
            created_at: new Date().toISOString().slice(0,10),
            updated_at: new Date().toISOString().slice(0,10),
        }
    );

    route.save(function (err) {
        if (err) {
            //return next(err);
            //return callback(err);
           // console.log(err)
			// swal("Route!", err, "ERROR");
			  res.send(err)
        }
       res.send('Route Added successfully')
	   
    })
};

exports.route_create_get = function (req, res) {
	console.log('creating routes');
    let route = new Route(
        {
            driver_id: req.body.driver_id,
            lat: req.body.lat,
            lng: req.body.lng,
            time: Date.now(),
            isDeleted: "0",
            created_at: new Date().toISOString().slice(0,10),
            updated_at: new Date().toISOString().slice(0,10),
        }
    );

    route.save(function (err) {
        if (err) {
            //return next(err);
            //return callback(err);
            //console.log(err)
			
			  res.send(err)
        }
        res.send('Route Added successfully')
		// swal("Route!", "Route Created successfully", "success");
    })
};


exports.route_detail = function (req, res) {
    Route.findById(req.params.id, function (err, route) {
        if (err) console.log(err)//return next(err);
        res.send(route);
    })
};

exports.route_list = function (req, res) {
    Route.find({}, function (err, route) {
        if (err) console.log(err)//return next(err);
        res.send(route);
    })
};

exports.driver_daily_route = function (req, res) {
    var today = new Date().toISOString().slice(0,10);
    Route.find({ "created_at" : today, "driver_id" : req.params.driver_id }, function (err, route) {
        if (err) console.log(err)//return next(err);
        res.send(route);
    })
};