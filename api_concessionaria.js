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

app.get('/listar/motos', (request, response) => {
    console.log(request.body);
    return response.json(motos)
})

app.delete('/excluir/motos', (request,response) => {
    const id = motos.indexOf('id');
    const delete_moto = motos.splice(id,1)
        
    return response.send(delete_moto)
})

const carro = [];

app.post('/cadastro/carro', (request, response) => {
    const validarcarro = carro.find((vc) => vc.Carro == request.body.Carro)
        if (validarcarro){
            return response.send("Status: Carro Já Cadastrado.")}
        
        carro.push({
        id: uuid.v4(),
        Carro: request.body.Carro,
        ano: request.body.ano
    })
    return response.send("Carro cadastrado com sucesso.")
})

app.get('/listar/carro', (request, response) => {
    console.log(request.body);
    return response.json(carro)
})

