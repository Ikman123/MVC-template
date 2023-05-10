const mongoose = require("mongoose");
const app = require("./app");

mongoose.connect(`mongodb+srv://nachoypancho:1913@cluster0.efmoojc.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("Conectado a la base de datos");
    app.listen(3006, () => {
        console.log(`Servidor corriendo en el puerto 3006 correctamente`);
    });
})
.catch((err) => {
    console.log("Error en la conexión a la base de datos:", err);
    process.exit(1);
});

module.exports = mongoose;