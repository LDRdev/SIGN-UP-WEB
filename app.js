const db = require("./modelos/db");

const postagens = db.sequelize.define("postagens",{
    Usuario:{
        type: db.Sequelize.STRING
    },
    Senha:{
        type: db.Sequelize.STRING
    },
    Email:{
        type: db.Sequelize.STRING
    },
})


const express = require("express");
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static(__dirname));
app.get("/", function(req,res){
    res.sendFile("/index")
});
app.post("/cad", function(req,res){

    postagens.create({Usuario: req.body.usuario,
    Senha: req.body.senha, Email: req.body.email}
    )

    res.send("AEEEEEEEEEEEE DEU CERTO!")

});

app.listen(8087, function(){
    console.log("Servidor rodando na porta 8087...")
});