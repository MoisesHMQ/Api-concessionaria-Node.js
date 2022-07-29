const { request, response } = require('express');
const express = require('express')
const app = express();
var uuid = require('uuid');

app.use(express.json());

const motos = [];

app.post('/cadastro/motos', (request, response) => {
    const validarMoto = motos.find((vm) => vm.moto == request.body.moto)
        if (validarMoto){
            return response.send("Status: Moto Já Cadastrada.")}
        
        motos.push({
        id: uuid.v4(),
        moto: request.body.moto,
        cc: request.body.cc
    })
    return response.send("Moto cadastrada com sucesso.")
})
