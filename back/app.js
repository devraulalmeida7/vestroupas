const express = require("express");
const app = express();
const produtosRoutes = require('./routes/produtos');
const adminRoutes = require('./routes/adminstrador');
const cors = require("cors");  // Importa o pacote cors
const body = require("body-parser");

app.use(cors());

app.use(body.json());

//USar as rotes de alunos
app.use('/admin', adminRoutes);

//Usar as rotas de cursos
app.use('/produtos', produtosRoutes);

app.listen(8080, function(){
    console.log("Servidor rodando na porta 8080!");
});