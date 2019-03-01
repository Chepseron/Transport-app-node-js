/**
 * Created by ELVIS on 2/28/2019.
 */
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const driver_controller = require('../controllers/driver.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', driver_controller.test);
router.post('/create', driver_controller.driver_create);
router.get('/show', driver_controller.driver_all);
router.get('/names', driver_controller.driver_names);
router.get('/:id', driver_controller.driver_details);
module.exports = router;