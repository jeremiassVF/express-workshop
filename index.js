const morgan = require('morgan');
const express = require('express');
const app = express();
const pokemon = require('./routes/pokemon');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/*
verbos HTPP
GET- obtener recursos
POST- almacenar/crear recursos
PATCH- modificar una parte de un recurso
PUT- modificar un recurso
DELETE- borrar un recurso
*/

app.get("/", (req, res, next) =>{
    return res.status(200).json({code: 1, menssage: "Bienvenido al Pokédex"});
});

app.use("/pokemon",pokemon);

app.use((req,res,next) =>{
    return res.status(404).json({code: 404, Message:"URL no encontrada"});
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});