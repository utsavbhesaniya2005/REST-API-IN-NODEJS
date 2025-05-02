const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const route = require('./routes/index');
const port = 3000;
const cors = require('cors');
const db = require('./config/dbConfig');


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use('/royella', route);

app.listen(port, (err) => {

    if(!err){
        
        console.log(`Server Running On https://localhost:${port}`);
    }
})