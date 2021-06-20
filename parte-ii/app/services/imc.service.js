
const model = require('../models/imc.model');

let imcs = [];

class ImcService {

    findAll() {
        return imcs;
    }

    findById(id) {
        return imcs.find(imc => imc.id == id);
    }

    create(payload=model) {
        const imc = {
            id: Math.round(Math.random() * 1000),
            imc: this.calc(payload.peso, payload.altura),
            ...payload
        };
        imcs.push(imc);
        return imc;
    }

    update(id, payload=model) {
        const imc = this.delete(id);
        const aux = {
            ...imc,
            ...payload,
            imc: this.calc(payload.peso, payload.altura),
        };
        imcs.push(aux);

        return aux;
    }

    delete(id) {
        const imc = this.findById(id)
        imcs = imcs.filter(imc => imc.id != id);
        return imc;
    }

    calc(peso, altura) {
        return Math.round((peso / (altura * altura)), 2);
    }

}

module.exports = new ImcService();