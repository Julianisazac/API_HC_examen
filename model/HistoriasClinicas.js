const {Schema, model} = require('mongoose');

const HistoriasClinicasSchema = ({
    idHistoriasClinicas:{
        type:Number,
        required:[true, 'El Id Historia clínica es requerido'],
        unique:true
    },
    nombres:{
        type:String,
        required:[true, 'El nombre es requerido']
    },
    apellidos:{
        type:String,
        required:[true, 'Los apellidos son requeridos']
    },
    fechaNacimiento:{
        type:String,
        required:[true, 'La fecha es requerida']
    },
    genero:{
        type:String,
        required:[true, 'El género es requerido']
    },
    fechaAtencion:{
        type:String,
        required:[true, 'La fecha es requerida']
    },
    medicos:{
        type:String,
        required:[true, 'El nombre del médico es requerido']
    },
    grupoSanguineo:{
        type:String,
        required:[true, 'El RH es requerido']
    },
    

});

module.exports = model('HistoriasClinicas', HistoriasClinicasSchema);