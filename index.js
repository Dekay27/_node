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

app.listen(3080, ()=>console.log('Express server running at port 3080'));

app.get("/employees", (req, res) => {
    mysqlConnection.query("SELECT * FROM employee", (err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});


// Access just one employee
app.get("/employees/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM employee WHERE EmpID = ?", [req.params.id],(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});

// Delete just one employee
app.delete("/employees/:id", (req, res) => {
    mysqlConnection.query("SELECT * FROM employee WHERE EmpID = ?", [req.params.id],(err, rows, fields) => {
        if(!err){
            console.log(rows);
            res.send(rows);
        }else{
            console.log(err);
        }
    });
});