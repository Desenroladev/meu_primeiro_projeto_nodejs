
const express = require(`express`);
const parser = require(`body-parser`);
const app = express();

app.use(parser.json());

imcs = [];

app.get(`/`, (req, res) => {
    res.send({messagem: "Ola Desenrola Dev!"});
});

app.get(`/imc`, (req, res) => {
    res.send(imcs);
});

app.get(`/imc/:id`, (req, res) => {
    const imc = imcs.find(imc => imc.id == req.params.id);
    res.send(imc);
});

app.post(`/imc`, (req, res) => {
    const imc = {
        id: Math.round(Math.random() * 1000),
        peso: req.body.peso,
        altura: req.body.altura,
        data: req.body.data,
        nome: req.body.nome,
        imc: parseFloat((req.body.peso / (req.body.altura * req.body.altura)).toFixed(2))
    };
    imcs.push(imc);
    res.send(imc);
});

app.put(`/imc/:id`, (req, res) => {
    const imc = imcs.find(imc => imc.id == req.params.id);
    imc.altura = req.body.altura;
    imc.peso = req.body.peso;
    imc.nome = req.body.nome;
    imc.data = req.body.data;
    imc.imc = parseFloat((req.body.peso / (req.body.altura * req.body.altura)).toFixed(2))
    res.send(imc);
});

app.delete(`/imc/:id`, (req, res) => {
    const imc = imcs.find(imc => imc.id == req.params.id);
    imcs = imcs.filter(imc => imc.id != req.params.id);
    res.send(imc);
});

app.listen(8888, () => {
    console.log(`Aplicação rodando: http://localhost:8888/`);
});
