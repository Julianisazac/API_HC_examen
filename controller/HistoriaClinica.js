const { response } = require('express')

const HistoriasClinicas = require('../model/HistoriasClinicas')

const getHistoriasClinicas = async (req, res) => {
    const HistoriaClinica = await HistoriasClinicas.find();
    res.json({
        msg: HistoriaClinica
    })
};

const postHistoriasClinicas = async (req, res) => {
    const datos = req.body 
    let mensaje = 'Inserción exitosa'
    try {

        const usuarios = new HistoriasClinicas(datos)
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
        precioDolar
    } = req.body; 
    let mensaje = 'Actualizacion Exitosa'
    try {
      const HistoriaClinica = await  HistoriasClinicas.findOneAndUpdate(
        { idHistoriasClinicas: idHistoriasClinicas },
        {
        nombres:nombres,
        apellidos:apellidos,
        fechaNacimiento:fechaNacimiento,
        genero:genero,
        fechaAtencion:fechaAtencion,
        medicos:medicos,
        precioDolar:precioDolar
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
    const {idHistoriasClinicas} = req.body
    let mensaje = 'Eliminación exitosa'
    try {
        const HistoriaClinica = await HistoriasClinicas.findOneAndDelete({idHistoriasClinicas: idHistoriasClinicas})
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