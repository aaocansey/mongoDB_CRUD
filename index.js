const express = require('express');
const app = express();
const studentRoutes = require('./routes/student_routes');
const connect = require('./api/db')

//middleware body-parser
app.use(express.json());

//connect to db
connect();

//routes
app.use('/', studentRoutes)

//app init
app.listen(5001, () => {console.log('server started')})