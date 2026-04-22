/**
 * User.js est un modèle qui sert à créer des utilisateurs. Le modèle User est de : id, email et password
 */

module.exports = (sequelize, Sequelize) => {
    const UserModel = sequelize.define("user", {
        email: {
            type: Sequelize.STRING,
            unique: true
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return UserModel;
}

/*
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
*/