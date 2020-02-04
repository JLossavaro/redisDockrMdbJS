'use strict';
const bodyParser = require("body-parser");
const User = require('./../models/user');


exports.post = (req, res) => {
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
    User.findAll().then(function(user){
        res.status(200).json(user)
    }).catch(function(erro){
        res.send('Erro: Nao foi possivel listar'+ erro)
    })
};