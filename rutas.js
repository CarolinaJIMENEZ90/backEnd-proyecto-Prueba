const express= require('express');
const routes = express.Router();
const controles= require('./controles');

//rutas para bucar contactos
routes.get('/contactos', controles.read);

//rutas para crear contactos 
routes.post('/contactos', controles.create);



//rutas para borrar  contactos
routes.delete('/contactos/:id', controles.delete);

//rutas para editar  contactos
routes.post('/editar/:id', controles.update);




module.exports= routes;