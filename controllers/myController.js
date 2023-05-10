const { default: mongoose } = require("mongoose");
const OneModel = require("../models/myModel");
const dtoNuevo = new OneModel({
    name : "Ignacio",
    edad: "17"
})

dtoNuevo.save()
.then (() => {
    console.log("Documento nuevo guardado");
    mongoose.connection.close();
})
.catch ((error) => {
    console.log(error);
    mongoose.connection.close();
})


exports.inicio = (req, res) => {
    res.status(200).render("index");
};