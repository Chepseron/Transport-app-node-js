/**
 * Created by Amon on 3/1/2019.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let RoutesSchema = new Schema({
    driver_id: {type: String, required: true, max: 100},
    lat: {type: String, required: true, max: 100},
    lng: {type: String, required: true, max: 100},
    time: {type: String, required: true, max: 100},
    isDeleted: {type: Number, required: true, max: 100},
    created_at: {type: String, required: true, max: 100},
    updated_at: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Routes', RoutesSchema);