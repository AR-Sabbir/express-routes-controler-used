const express=require('express');
const dotenv=require('dotenv');
const colors=require('colors');
const path = require('path');
const pageRoute = require('./routes/pageRoute');

// express init

const app=express()



// environment Setup

dotenv.config();
const PORT =process.env.PORT || 4040;



// init Route





// Data Manage

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// static folder

app.use('/public',express.static('public'))

// routing
app.use( pageRoute);



// server listen

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`.bgGreen.black);
})