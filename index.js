const express = require('express');
const app = express();

/*
verbos HTPP
GET
POST
PATCH
PUT
DELETE
*/
app.get("/", (req, res, next) =>{
    res.status(200);
    res.send("Bienvenidos");
})

app.listen(3000, () => {
    console.log("Server is running...");
})