// init express
const express = require ('express');
const cors = require('cors');
const app =   express();


// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors());
app.use(express.json());

// URL (RUTAS)
app.use(require('./routes/products'));


// Empezando el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});

