const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Client = sequelize.define('Client', {
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true,
    }
});


module.exports = Client;