const { response } = require('express')

const Historias = require('../model/HistoriasClinicas')

const getHistoriasClinicas = async (req, res) => {
    const HistoriaClinica = await Historias.find();
    res.json({
        msg: HistoriaClinica
    })
};

const postHistoriasClinicas = async (req, res) => {
    const datos = req.body 
    let mensaje = 'Inserción exitosa'
    try {

        const usuarios = new Historias(datos)
        await usuarios.save()

    } catch (error) {

        mensaje = error
        console.log(error)

    }

    res.json({
        msg: mensaje
    })
}
const putHistoriasClinicas = async (req, res) => {
    const {
        idHistoriasClinicas,
        nombres,
        apellidos,
        fechaNacimiento,
        genero,
        fechaAtencion,
        medicos, 
        
    } = req.body; 
    let mensaje = 'Actualizacion Exitosa'
    try {
      const HistoriaClinica = await  Historias.findOneAndUpdate(
        { idHistoriasClinicas: idHistoriasClinicas },
        {
        nombres:nombres,
        apellidos:apellidos,
        fechaNacimiento:fechaNacimiento,
        genero:genero,
        fechaAtencion:fechaAtencion,
        medicos:medicos,
        }
      )
      
    } catch (error) {
      mensaje = error
    }
    res.json({
      msg: mensaje
    });
  };

const deleteHistoriasClinicas = async (req, res) => {
    const {idHistoriasClinicas} = req.params
    let mensaje = 'Eliminación exitosa'
    try {
        const HistoriaClinica = await Historias.findOneAndDelete({idHistoriasClinicas: idHistoriasClinicas})
    } catch (error) {
        mensaje = error;
    }
    res.json({
        msg:mensaje
    });
};

module.exports = {
    getHistoriasClinicas,
    postHistoriasClinicas,
    putHistoriasClinicas,
    deleteHistoriasClinicas
}