const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const { dbConection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT
        this.HistoriasClinicasPath = '/HistoriasClinicas'
        this.middlewares();
        this.routes();
        this.conectarDB();
    }

    listen() {
        this.app.listen(
            this.port, () => {
                console.log('listening on port ' + this.port)
            }
        )
    }

    routes() {
        this.app.use(this.HistoriasClinicasPath, require('../routes/HistoriasClinicas'))
    }

    middlewares() {
        this.app.use(cors()); // indicar el uso de cors
        this.app.use(bodyParser.json());
    }

    async conectarDB() {
        await dbConection();
    }
}

module.exports = { Server };