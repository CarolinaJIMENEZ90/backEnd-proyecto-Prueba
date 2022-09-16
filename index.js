//configuração inicial
const express= require('express');
const app= express();
require('./configdb');

const routes= require('./rutas')
const cors= require('cors');

app.use(cors());
//configuração Json

app.use(express.json());
app.use(routes);



//porta do servidor
app.listen(3333)
