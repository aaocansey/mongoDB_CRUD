const express = require('express');
const app = express();
const studentRoutes = require('./routes/student_routes');
const authRoute = require('./routes/auth_routes');
const cookieParser = require('cookie-parser');
const connect = require('./api/db')

//middleware body-parser
app.use(express.json());
app.use(cookieParser());

//connect to db
connect();

//routes
app.use('/', authRoute)
app.use('/', studentRoutes);
//app init
app.listen(5001, () => {console.log('server started')})