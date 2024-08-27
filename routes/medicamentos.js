const express = require('express');
const router = express.Router();
const MedicamentoController = require('../controllers/MedicamentoController');

router.get('/', MedicamentoController.getMedicamentos);
router.post('/', MedicamentoController.createMedicamento);

module.exports = router;
