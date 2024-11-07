const bd = require("../connection")
const express = require('express')
const app = express.Router();


app.get('/', function(req,res) {
    const select = 'select * from produto';
    bd.query(select, function(err,results) {
        if(err) {
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
})

app.get('/:id', function(req,res) {
    const select = 'select * from produto where id_produto  = ?';
    bd.query(select,[req.params.id], function(err,results) {
        if(err){
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
})



module.exports = app;