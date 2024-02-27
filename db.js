const Sequelize = require("sequelize");
const sequelize = new Sequelize("sistemacadastro", "root", "SENHA AQUI",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado ao banco de dados com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar-se ao banco de dados: " + erro)
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}