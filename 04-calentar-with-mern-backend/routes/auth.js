/*

    Rutas de Usuarios / Auth
    host + /api/auth

*/

const { Router } = require('express')
const { check } = require('express-validator')

const { validateFields } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validateJWT')

const router = Router()

const { createUser, loginUser, revalidateToken } = require('../controllers/auth')

router.post(
    '/new', 
    [
        //middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    createUser
)

router.post('/',
    [
        //middlewares
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
)

router.get('/renew', validateJWT, revalidateToken)

module.exports = router