const express = require('express')
const {createUsuario, getUsuarios, getUsuariosId, actualizarUsuarios, borrarUsuarios} = require('../controllers/user')
const router = express.Router()

// Crear usuario

router.post('/users',createUsuario)


//------------------------------------------------------------------------------
// get all users
router.get('/users', getUsuarios)



//---------------------------------------------------------------------------------------
// Get one user
router.get('/users/:id', getUsuariosId)



//---------------------------------------------------------------------------------------
// actualizar usuario
router.put('/users/:id', actualizarUsuarios)


//------------------------------------------------------------------------------------------
// Delete user
router.delete('/users/:id', borrarUsuarios)




module.exports = router // exportamos la ruta usuarios