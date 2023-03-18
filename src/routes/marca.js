const express = require('express')
//const marcaSchema = require('../models/marca')
const {createMarca, obtenerMarca, obtenerMarcaId, actualizarMarca, borrareMarca} = require('../controllers/marca')
const router = express.Router()

// crear equipo
router.post('/marcas',createMarca )



//--------------------------------------------------------------------------------------------------
// obtener todo el equipo

router.get('/marcas',obtenerMarca )



// obtener un solo equipo
router.get('/marcas/:id', obtenerMarcaId)



//----------------------------------------------------------------------------------------------------
//Actualizar equipo

router.put('/marcas/:id',actualizarMarca)


//-----------------------------------------------------------------------------------------
// borrar marca
router.delete('/marcas/:id',borrareMarca )


module.exports = router // exportamos las rutas de marca