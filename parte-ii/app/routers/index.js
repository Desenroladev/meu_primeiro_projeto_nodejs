
const express = require(`express`);
const router = express.Router();

const imcController = require(`../controllers/imc.controller`)

router.get(`/imc`, imcController.index);
router.get(`/imc/:id`, imcController.get);
router.post(`/imc`, imcController.post);
router.put(`/imc/:id`, imcController.put);
router.delete(`/imc/:id`, imcController.delete);


module.exports = router;