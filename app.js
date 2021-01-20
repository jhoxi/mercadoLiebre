// Require de Express
const express = require('express');

// Require de FS
const fs = require('fs');

// Ejecución de Express
const app = express();


// Levantando el Servidor en el puerto 3030
app.listen(3000, () => console.log('Server running in 3000 port'));

app.use(express.static(__dirname + '/public/'));


 