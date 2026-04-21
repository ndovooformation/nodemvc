/**
 * User.js est un modèle qui sert à créer des utilisateurs. Le modèle User est de : id, email et password
 */
const DataTypes = require("sequelize");

const sequelize = require("../db");

module.exports = sequelize.define(
    'user', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        email:{
            type: DataTypes.STRING,
            unique: true, 
        },
        password: {
            type: DataTypes.STRING,
        },
    }
);
