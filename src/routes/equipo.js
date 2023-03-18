const express = require('express')// importamos la libreria express
const {createEquipo, getEquipo, getEquipoId, actualizarEquipo, borrarEquipo} = require('../controllers/equipo')
const router = express.Router()// llamamos la función Router de express

// crear equipo
router.post('/equipos', createEquipo)


//**-------------------------------------------------------------------------------------- */
// obtener todo el equipo
router.get('/equipos',getEquipo )




//**-------------------------------------------------------------------------------------- */
// obtener un solo equipo por su ID
router.get('/equipos/:id',getEquipoId )


//**-------------------------------------------------------------------------------------- */
//Actualizar equipo
router.put('/equipos/:id', actualizarEquipo)


//**-------------------------------------------------------------------------------------- */
// borrar equipo
router.delete('/equipos/:id',borrarEquipo )


module.exports = router // exportamos la ruta