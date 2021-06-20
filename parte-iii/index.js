
const express = require(`express`);
const bodyParser = require('body-parser');
const router = require(`./app/routers`);

const app = express();
app.use(bodyParser.json());
app.use(router);

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`Aplicação rodando: http://localhost:${port}/`);
});
