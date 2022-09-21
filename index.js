const express = require('express');
const mysql = require('mysql');
const bodyparser = require('body-parser');
var app = express();

app.use(bodyparser.json());


var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12341234",
    database: "employeedb"
});

mysqlConnection.connect((err)=>{
    if(!err)
        console.log('DB connection successful');
    else
        console.log('DB connection not successful \n Error: ' + JSON.stringify(err, undefined, 2));
});