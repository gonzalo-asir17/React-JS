const express = require('express');
const sequelize = require('./config/db');
const cors = require('cors');
const medicamentosRouter = require('./routes/medicamentos');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/medicamentos', medicamentosRouter);

// Sincronizar base de datos y arrancar el servidor
sequelize.sync().then(() => {
    app.listen(3000, () => {
        console.log('Servidor ejecutándose en http://localhost:3000');
    });
}).catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});

