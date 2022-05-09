const express = require('express')
const app =  express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config(); // so we can use .env file

// load router
const adminRegister = require('./router/adminRouter/registerUser')
const adminDelUser = require('./router/adminRouter/deleteUser')
const courseRouter = require('./router/adminRouter/courseRouter')
const loginRouter = require('./router/credential/loginRouter')
const trCourseRouter = require('./router/trRouter/classRouter')
const stuRouter  = require('./router/stuRouter/stuRouter')

require('./db/dbconnection');
const port = process.env.PORT || 3000;

app.use(cors()); // when we have an incoming api call, it will not block it, it will be able to send request to our backend
app.use(express.json()) // parse incoming request in json format
app.use(express.urlencoded({extended: false})) // parses incoming requests with URL-encoded payloads.
app.use(loginRouter);
app.use('/admin',adminRegister); 
app.use('/admin', adminDelUser);
app.use('/admin', courseRouter);
app.use('/tr', trCourseRouter);
app.use('/stu', stuRouter);

app.listen(port, () => {
  console.log("Server is up on port " + port);
})

// test
