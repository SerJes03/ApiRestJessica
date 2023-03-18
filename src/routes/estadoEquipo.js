const express = require('express')
const {createEstadoEquipo, getestadoEquipo, getestadoEquipoId, actualizarestadoEquipo, borrarestadoEquipo} = require('../controllers/estadoEquipo')
const router = express.Router()

// crear estado equipo
router.post('/estadoequipos',createEstadoEquipo )



//--------------------------------------------------------------------------------------------------
// obtener todo el equipo
router.get('/estadoequipos',getestadoEquipo)


//----------------------------------------------------------------------------------------------------
// obtener un solo equipo por su ID
router.get('/estadoequipos/:id',  getestadoEquipoId)


//--------------------------------------------------------------------------------------------

//Actualizar equipo
router.put('/estadoequipos/:id',actualizarestadoEquipo)


//-------------------------------------------------------------------------------------------
// borrar equipo
router.delete('/estadoequipos/:id', borrarestadoEquipo)


module.exports = router // exportaos la ruta para estado equipo