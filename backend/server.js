require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: 'http://localhost:5500',
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api', authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
  })
  .catch(err => {
    console.error('Error al conectar con MongoDB:', err.message);
  });
