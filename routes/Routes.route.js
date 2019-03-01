/**
 * Created by ELVIS on 3/1/2019.
 */
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const route_controller = require('../controllers/route.controller');

router.post('/create', route_controller.route_create);
router.get('/show', route_controller.route_all);
router.get('/:id', route_controller.route_details);
router.get('/driver_daily_route/:driver_id', route_controller.driver_daily_route);
module.exports = router;