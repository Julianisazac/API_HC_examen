const {Router} = require('express');

const route = Router();

const{getHistoriasClinicas, postHistoriasClinicas, putHistoriasClinicas, deleteHistoriasClinicas} = require('../controller/HistoriaClinica');

route.get('/', getHistoriasClinicas)
route.post('/', postHistoriasClinicas)
route.put('/:idHistoriasClinicas', putHistoriasClinicas)
route.delete('/:idHistoriasClinicas', deleteHistoriasClinicas)

module.exports = route