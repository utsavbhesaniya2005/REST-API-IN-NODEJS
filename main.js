const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/index');
const port = 3000;
const db = require('./config/dbConfig');


app.use(bodyParser.urlencoded({extended : true}));

app.use('/api', route);

app.listen(port, (err) => {

    if(!err){
        
        console.log(`Server Running On https://localhost:${port}`);
    }
})