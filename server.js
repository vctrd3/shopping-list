const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const itemsRouter = require('./routes/api/items')

const app = express();
const PORT = process.env.PORT || 5000;
//Bodyparser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
const conn = async () => {
  try{
    await mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log('connected to db')
    app.listen(PORT, console.log(`server listening on port ${PORT}`))
  }catch(err){
    console.log(err)
  }
}
conn();

//Use Routes
app.use('/api/items', itemsRouter);
