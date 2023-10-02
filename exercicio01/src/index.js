const express = require("express");

const app = express();

const { filtrarCarro, encontrarUmCarro } = require("./controladores/carros");

const { validarSenha } = require("./intermediarios");

app.use(validarSenha);
app.get("/carros", filtrarCarro);
app.get("//carros/:id", encontrarUmCarro);

app.listen(3000);
