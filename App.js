const express = require('express');
var mongoose = require('mongoose');
const config = require("config");
const body = require('body-parser');

const app = express();
const port = 3000


if (!config.get("myprivatekey")) {
    console.error("FATAL ERROR: myprivatekey is not defined.");
    process.exit(1);
}
  

var mongoDB = 'mongodb://127.0.0.1/testno';

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {console.log("Connected to MongoDB...")})
.catch(err => console.error("Could not connect to MongoDB..."));;

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/Api/v1/user', require('./api/user.routes'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});