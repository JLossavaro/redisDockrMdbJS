const Sequelize = require("sequelize");




const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/sequelize')



module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize

}