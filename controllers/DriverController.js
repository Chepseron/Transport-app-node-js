/**
 * Created by Amon on 2/28/2019.
 */
const Driver = require('../models/driver.model');
const swal = require('sweetalert');
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
    res.sendfile('index.html');
};

exports.index = function (req, res) {
    res.sendfile('index.html');
};

exports.driver_create_post = function (req, res) {
    console.log("Driver create");
    let driver = new Driver(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                isDeleted: "0",
                created_at: new Date().toISOString().slice(0, 10),
                updated_at: new Date().toISOString().slice(0, 10),
            }
    );

    driver.save(function (err) {
        if (err) {
            //return next(err);
            //return callback(err);
            //res.send(err)
            // console.log(err)
            res.send(err);

        }
        res.send('Driver Created successfully')

    })
};


exports.driver_update_post = function (req, res) {
    Driver.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, res) {
        if (err)
            return next(err);
        res.send('Driver udpated.');
    });
};

exports.driver_create_get = function (req, res) {
    console.log("Driver create");
    let driver = new Driver(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username,
                password: req.body.password,
                isDeleted: "0",
                created_at: new Date().toISOString().slice(0, 10),
                updated_at: new Date().toISOString().slice(0, 10),
            }
    );

    driver.save(function (err) {
        if (err) {
            //return next(err);
            //return callback(err);
            res.send(err)
            //console.log(err)

        }
        res.send('Driver Created successfully')


    })
};

exports.driver_detail = function (req, res) {
    console.log("Driver findById");
    Driver.findById(req.params.id, function (err, driver) {
        if (err)
            console.log(err)
        // return next(err);
        res.send(driver);
    })
};

exports.driver_list = function (req, res) {
    Driver.find({}, function (err, driver) {
        if (err)console.log(err)
        //return next(err);
        res.send(driver);
    })
};

exports.driver_delete = function (req, res) {
    Driver.findByIdAndRemove(req.params.id, {$set: req.body}, function (err, res) {
        if (err) console.log(err)//return next(err);
        res.send('Driver deleted.');
    });
};

