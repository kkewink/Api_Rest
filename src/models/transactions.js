const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Transaction = sequelize.define('Transaction', {
    tipo_conta:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    tipo_transacao:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    valor:{
        type:DataTypes.DOUBLE,
        allowNull:false,
    },
}, {
    timestamp:true //TimeStamps, armazena o horario
});


module.exports = Transaction;