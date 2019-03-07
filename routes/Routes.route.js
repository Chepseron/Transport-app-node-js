/**
 * Created by ELVIS on 3/1/2019.
 */
const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const route_controller = require('../controllers/RouteController');
router.post('/Routes/', route_controller.index);
router.post('/Routes/create', route_controller.route_create_post);
router.get('/Routes/create', route_controller.route_create_get);
router.get('/Routes/show', route_controller.route_list);
router.get('Routes/detail/:id', route_controller.route_detail);
router.get('/Routes/driver_daily_route/:driver_id', route_controller.driver_daily_route);
router.put('/Routes/:id/update', route_controller.route_update_post);
router.delete('/Routes/:id/delete', route_controller.route_delete);
module.exports = router;