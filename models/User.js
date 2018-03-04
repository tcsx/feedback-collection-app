const mongoose = require('mongoose');
const {Schema} = mongoose;

const useerSchema = new Schema({
    googleId: String
});

mongoose.model('users', useerSchema); 