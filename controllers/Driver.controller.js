/**
 * Created by Amon on 2/28/2019.
 */
const Driver = require('../models/driver.model');

exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
    res.sendfile('index.html');
};

exports.driver_create = function (req, res) {
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
            return next(err);
            //return callback(err);
            //res.send(err)
            console.log(err)
        }
        res.send('Driver Created successfully')
    })
};

exports.driver_details = function (req, res) {
    Driver.findById(req.params.id, function (err, driver) {
        if (err) return next(err);
        res.send(driver);
    })
};

exports.driver_all = function (req, res) {
    Driver.find({}, function (err, driver) {
        if (err)return next(err);
        res.send(driver);
    })
};


exports.driver_names = function (req, res) {
    Driver.find({}, function (err, driver) {
        if (err)return next(err);
        res.send(driver.firstname);
    })
};