const imcService = require("../services/imc.service");

class ImcController {

    index(req, res) {
        const all = imcService.findAll();
        res.send(all);
    }
    
    get(req, res) {
        const imc = imcService.findById(req.params.id);
        res.send(imc);
    }
    
    post(req, res) {
        const imc = imcService.create(req.body);
        res.send(imc);
    }
    
    put(req, res) {
        const imc = imcService.update(req.params.id, req.body);
        res.send(imc);
    }

    delete(req, res) {
        const imc = imcService.delete(req.params.id);
        res.send(imc);
    }
    
}

module.exports = new ImcController();
