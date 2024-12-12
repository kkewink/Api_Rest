const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");

const Admin = sequelize.define('Admin', {
    _idAdmin:{
        type:DataTypes.STRING,
        allowNull: true,
        require:true,
    },
    nome:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    idade:{
        type:DataTypes.NUMBER,
        allowNull:false,
    },
    senha:{
        type:DataTypes.STRING,
        allowNull:false,
    },
});

module.exports = Admin;