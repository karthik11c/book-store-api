'use strict'
var Book = require('../models/books');
module.exports = {

 book : function(req,res){

 res.json({
   book : []
 })

},

create: function(req,res){
 var book = new Book(req.swagger.params.value.book);
 book.save(function(err){
   if(err){
     re.status(500).json(err).end();
     return;
   }

  res.json({
    book : book
  }).end();
});

}

}
