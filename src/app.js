require('dotenv').config(); // Arquivo => .env
const express = require('express');
const sequelize  = require('./config/database');
const router = require('./routers/router')

const app = express(); // iniciando servidor

app.use(express.json()); // Resposta via JSON
app.use('/', router)
// process.emv { PORT } 3000

sequelize.authenticate()
.then(() => {
    console.log("Conexao com o banco de dados deu certo");
    sequelize.sync();
})
.catch(err => {
    console.error("Erro ao conectar no banco: ", err);
});


const PORT = process.env.PORT || 3010;
//listen -> Ouvir
// Ouvindo na possivel ou na porta 3000;
app.listen(PORT, () =>{
    console.log('--------------------------------');
    console.log(`Running on http://${PORT}`)
    console.log('--------------------------------');

})