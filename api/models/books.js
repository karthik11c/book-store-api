var mongoose = require('mongoose');

 var BookSchema = mongoose.Schema({

   id : String ,
   name : String

 });

    module.exports = mongoose.model('Book',BookSchema);
