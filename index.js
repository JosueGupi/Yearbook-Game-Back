

const express = require("express"),
app = express(),
mongoose = require('mongoose'),
      cors = require('cors'),
      //config = require('./config.js'),
      PORT = 3001//config.PORT,
      HOST = 'mongodb+srv://admin:admin@cluster0.jm0mt.mongodb.net/Yearbook-project?retryWrites=true&w=majority&appName=Cluster0'//'mongodb+srv://admin:admin@cluster0.jm0mt.mongodb.net/';//config.HOST,

// Router import
usersRouter = require('./routes/UsersRoute');
//namePoolRouter = require('./routes/NamePool'),


app.use(express.json());
app.use(cors());

// Router prefixes
app.use('/users', usersRouter);
//app.use('/namepool', namePoolRouter)


async function mongoConnect() {
    let res = await mongoose.connect(HOST);
    console.log(`Connected to ${HOST}`);
};

mongoConnect();

app.listen(PORT,()=>{
    console.log(`Servers Runs at port ${PORT}`)
});
