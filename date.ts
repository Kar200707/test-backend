const mongoose = require('mongoose');

const Date = mongoose.Schema({
   email: {type: String, required: true},
   password: {type: String, required: true}
});

export default mongoose.model('date', Date);