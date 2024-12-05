const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Account = sequelize.define('Account', {
    saldo:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});


module.exports = Account;