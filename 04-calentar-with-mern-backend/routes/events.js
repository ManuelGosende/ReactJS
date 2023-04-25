/*

    Rutas de Events
    host + /api/events

*/

const { Router } = require('express')
const { check } = require('express-validator')

const { validateFields } = require('../middlewares/validateFields')
const { validateJWT } = require('../middlewares/validateJWT')

const router = Router()

const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { isDate } = require('../helpers/isDate')

// Todas las peticiones van a ser validadas.
router.use( validateJWT )

// Crear nuevo evento
router.post('/',
    [
        check('title', "El título es obligatorio").not().isEmpty(),
        check('start', "La fecha de inicio es obligatoria").custom( isDate ),
        check('end', "La fecha de finalización es obligatoria").custom( isDate ),
        validateFields
    ],
    createEvent
)

// Obtener eventos
router.get('/', getEvents)

// Actualizar evento
router.put('/:id', updateEvent)

// Borrar evento
router.delete('/:id', deleteEvent)

module.exports = router