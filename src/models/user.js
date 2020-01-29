const db = require('../config/dbSql')



const User = db.sequelize.define('user', {
    login: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    role: {
        type: db.Sequelize.STRING
    }
 
}, {
});

//User.sync({force: true})

module.exports = User;