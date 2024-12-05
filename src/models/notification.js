const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Notification = sequelize.define('Notification', {
    mensagem:{
        type:DataTypes.STRING,
        allowNull:false,
    },
}, {
    timestamp:true //TimeStamps, armazena o horario
});


module.exports = Notification;