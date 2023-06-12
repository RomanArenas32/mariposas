const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        //variables
        this.app = express();
        this.PORT = process.env.PORT;
        this.pathUser = '/api/user';

        //midlewares
        this.midlewares();
        this.routes();
    }

    midlewares() {
        this.app.use(express.json()); //Formatea todo lo que viene en formato json
        this.app.use(cors()); //soluciona errores de los cors
        this.app.use(express.static('public')); //renderiza el html de la carpeta public 
    }

    routes() {
        this.app.use(this.pathUser, require('../routes/routes'));
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log("servidor corriendo en el puerto: ", this.PORT)
        })
    }
}



module.exports = Server
