const express =require('express');
const app = express();
const cors = require('cors');
const bodyparser = require('body-parser');
const dbConnection = require('./config/db.js'); 
let router = require('./router/user_router.js');
const config = require('./config/index');
const uri = config.port;
app.use(cors());
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());
app.use('/api',router);

const server = app.listen(uri,()=>{
    console.log('Listing At port no. 8000');
});