const morgan = require('morgan');
const express = require('express');
//middleware
const auth = require('./middleware/auth');
const notFound = require('./middleware/notFound');
const index = require('./middleware/index');
const app = express();
//rutes
const pokemon = require('./routes/pokemon');
const user = require('./routes/user');

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

app.get("/", index);

app.use("/user", user);
app.use(auth);
app.use("/pokemon",pokemon);
app.use(notFound);

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running...");
});