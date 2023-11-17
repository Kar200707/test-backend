
const mongoose = require('mongoose');

const Date = mongoose.Schema({
    id: {type: Number, required: false, autoIncrement: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

export default mongoose.model('date', Date);