'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var mongoose = require('mongoose');
module.exports = app; // for testing

var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }

  // install middleware
  swaggerExpress.register(app);


 mongoose.connect('mongodb://localhost:8080/db',{userNewUrlParser:true},function(err){
    if(err)
      throw err;
    else
     console.log('successfully connected database at port 3000 localhost..');
  });
  //mongoose.connection.on('error',console.error.bind(console,'connection error'));
  mongoose.connection.once('open',function(){
     app.listen(10010,function(){

        console.log('app is listening on port 10010...');
     });
  });
/*
  var port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths['/hello']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/hello?name=Scott');
  }
  */
});
