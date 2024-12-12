const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Account = sequelize.define('Account', {
    _idClient: {
        type: DataTypes.STRING,
        require: true,
        unique: true,
    },
    saldo: {
        type: DataTypes.DECIMAL,
        require: true,
        allowNull: false,
    },
});

module.exports = Account;