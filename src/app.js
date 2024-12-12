require('dotenv').config;
const express = require('express');
const sequelize = require('./config/database');
const router = require('./routers/router');

const app = express(); // Iniciando o servidor

app.use(express.json()); // Resposta via JSON
app.use('/', router)

sequelize.authenticate()
    .then(async () => {
        console.log("Conexao com o banco de dados deu certo");
        await sequelize.sync();
    })
    .catch(err => {
        console.error("Erro ao conectar no banco: ", err);
    })

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('-------------------------------------');
    console.log(`Running on http://${PORT}`);
    console.log('-------------------------------------');
})