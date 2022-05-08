const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes

const eventPostRoutes = require ('./routes/eventposts');
const payment = require('./routes/payment.js');



//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware

app.use(eventPostRoutes);
app.use(payment);

const PORT = 8000;

const DB_URL='mongodb+srv://dream:dream1234@mernapp.0bt95.mongodb.net/dream?retryWrites=true&w=majority';
// const DB_URL ='mongodb+srv://dream:dream@dream.ty3fo.mongodb.net/dream?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB connected');
})
.catch((err) => console.log('DB connection error', err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});