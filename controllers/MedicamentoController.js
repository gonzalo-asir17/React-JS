const Medicamento = require('../models/Medicamento');

exports.getMedicamentos = async (req, res) => {
    try {
        const medicamentos = await Medicamento.findAll();
        res.json(medicamentos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createMedicamento = async (req, res) => {
    const { nombre, codigo, stock, precio, caducidad } = req.body;

    try {
        const nuevoMedicamento = await Medicamento.create({
            nombre,
            codigo,
            stock,
            precio,
            caducidad
        });
        res.json(nuevoMedicamento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
