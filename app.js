const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) => res.sendFile('Mi sitio'));

app.listen(port, () => console.log('Servidor corriendo en el puerto ' + port));