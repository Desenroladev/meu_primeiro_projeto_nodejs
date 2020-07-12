const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Olá Desenrola Dev!");
});

//recebe a porta dinamicamente ou usa o valor padrão 3000
const port = process.env.NODE_PORT || 3000;

app.listen(port, () => {
    console.log(`Rodando na porta: ${port}`);
});