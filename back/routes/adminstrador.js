const bd = require("../connection")
const express = require('express')
const app = express.Router();



app.get('/', function(req,res) {
    const get = "select * from administrador"
    bd.query(get,function(err,results){
        if(err){
            console.log(err)
        }
        else{
            res.send(results)
        }
    })
})


app.post('/add',function(req,res) {
    const insert = "insert INTO administrador SET nome_adm=?, contato_adm=?"
    const body = req.body
    bd.query(insert, [body.nome_adm, body.contato_adm], function(err){
        if(err){
            console.log(err)
        }
        else{
            res.send("Inserido com sucesso")
        }
    })
    
})

app.post('/insert',function(req,res) {
    const insert = "insert INTO produto SET nome_produto=?, descricao_produto=?"
    const body = req.body
    bd.query(insert, [body.nome_produto, body.descricao_produto], function(err){
        if(err){
            console.log(err)
        }
        else{
            res.send("Inserido com sucesso")
        }
    })
    
})


app.delete("/del/:id", function(req,res) {
    const del = "delete from produto where id_produto =?";
    bd.query(del, [req.params.id], function(err){
        if(err){
            console.log(err);
        }
        else{
            res.end("Excluído com sucesso")
        }
    })
})


app.put('/insert/:id', function(req,res) {
    const update = "update produto SET nome_produto=? where id_produto=?";
    const body = req.body
    bd.query(update, [body.nome_produto, req.params.id], function(err){
        if(err) {
            console.log(err)
        }
        else {
            res.end("Atualizado com sucesso!")
        }
    })
});





// app.delete("/del/:id", function(req,res) {
//     const del = "delete from administrador where id_adm =?";
//     bd.query(del, [req.params.id], function(err){
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.end("Excluído com sucesso")
//         }
//     })
// })


// app.put('/insert/:id', function(req,res) {
//     const update = "update administrador SET nome_adm=? where id_adm=?";
//     const body = req.body
//     bd.query(update, [body.nome_adm, body.contato_adm, req.params.id], function(err){
//         if(err) {
//             console.log(err)
//         }
//         else {
//             res.end("Atualizado com sucesso!")
//         }
//     })
// });


module.exports = app;