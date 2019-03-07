/**
 * Created by ELVIS on 2/28/2019.
 */
const express = require('express');
const router = express();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const driver_controller = require('../controllers/DriverController');


// a simple test url to check that all of our files are communicating correctly.
router.get('/Drivers/', driver_controller.index);
router.get('/Drivers/test', driver_controller.test);
router.post('/Drivers/create', driver_controller.driver_create_post);
router.get('/Drivers/create', driver_controller.driver_create_get);
router.get('/Drivers/show', driver_controller.driver_list);
router.get('/Drivers/details/:id', driver_controller.driver_detail);
router.put('/Drivers/:id/update', driver_controller.driver_update_post);
router.delete('/Drivers/:id/delete', driver_controller.driver_delete);
module.exports = router;