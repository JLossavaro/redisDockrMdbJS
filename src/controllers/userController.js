'use strict';
const bodyParser = require("body-parser");
const User = require('./../models/user');


exports.post = (req, res) => {
    const vm = req.body;
    User.create({ 
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        role: req.body.role }).then(function(){
               res.redirect('/listar')
           }).catch(function(erro){
               res.send('Erro: Não foi registrado com sucesso!')
            })
};


exports.get = (req, res) => {
    const vm = req.body;
    User.create({ 
}).then(function(){
           }).catch(function(erro){res.send(
               'Erro: Não foi registrado com sucesso!' + erro)
           })
};