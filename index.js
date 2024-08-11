

const express = require("express"),
app = express(),
mongoose = require('mongoose'),
      cors = require('cors'),
      //config = require('./config.js'),
      PORT = 3001//config.PORT,
      HOST = 'mongodb+srv://admin:admin@cluster0.jm0mt.mongodb.net/'//config.HOST,

// Router import
usersRouter = require('./routes/Users');
//namePoolRouter = require('./routes/NamePool'),


app.use(express.json())
app.use(cors())

// Router prefixes
app.use('/users', usersRouter)
//app.use('/namepool', namePoolRouter)


mongoose.connect(
    HOST
);

app.listen(PORT,()=>{
    console.log(`Servers Runs at port ${PORT}`)
});