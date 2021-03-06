const mongoose = require('mongoose');
const config = require('./index');
const uri = config.mongoURI; 
mongoose.connect(uri,{useNewUrlParser : true, useUnifiedTopology : true});
console.log("DB Created");
const db = mongoose.connection;
mongoose.set("useCreateIndex",true);
db.on('error',()=>{console.log("Connection error occured");});
db.once('open', ()=> {
   console.log("Connection establised");
});