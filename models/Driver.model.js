/**
 * Created by Amon on 2/28/2019.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let DriversSchema = new Schema({
    firstname: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    username: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 100},
    isDeleted: {type: Number, required: true, max: 100},
    created_at: {type: String, required: true, max: 100},
    updated_at: {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('Drivers', DriversSchema);