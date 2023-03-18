const express = require('express')
const {createInventario, obtenerInventario, obtenerInventarioId,obtenerInventarioActivo, 
    actualizarInventario, borrarInventario} = require('../controllers/inventario')
const router = express.Router()
 
// crear inventario sin restricción 


// crear inventario verificando usuario activo, tipo equipo, estado equipo y marca
router.post('/inventarios',createInventario)



//-------------------------------------------------------------------------------------------------
// obtener todo el inventariio
router.get('/inventarios', obtenerInventario)

//---------------------------------------------------------------------------------------------
// obtener un solo inventario
router.get('/inventarios/:id', obtenerInventarioId)

//----------------------------------------------------------------------------------------------------

// obtener solo inventario con usuario activo
router.get('/inventarios_usuario_activo', obtenerInventarioActivo)



//-------------------------------------------------------------------------------------------------
//Actualizar inventario
router.put('/inventarios/:id',actualizarInventario )




//-----------------------------------------------------------------------------------------------
// borrar inventario
router.delete('/inventarios/:id', borrarInventario)


module.exports = router // exportamos las rutas inventario