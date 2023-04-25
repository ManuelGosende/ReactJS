const { response } = require('express')
const Event = require('../models/EventModel')
const bcrypt = require('bcryptjs')
const { generateJWT } = require('../helpers/jwt')

const getEvents = async(req, res = response) => {

    // populate() ayuda a obtener datos del usuario del evento.
    const events = await Event.find().populate('user', 'name')

    res.status(400).json({
        ok: true,
        events
    })

}

const createEvent = async(req, res = response) => {

    const event = new Event( req.body )

    try {

        event.user = req.uid

        // Guardar evento, el cual ya tiene el título, el inicio, el final, las notas, etc.
        const eventSabed = await event.save()

        res.status(201).json({
            ok: true,
            event: eventSabed
        })
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Hable con el administrador."
        })
    }

}

const updateEvent = async(req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try {

        const event = await Event.findById( eventId )
        // Si el Evento a actualizar a través de su ID existe:
        if(!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento con ese ID no existe.'
            })
        }

        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para editar este evento.'
            })
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        // findByIdAndUpdate( evento a actualizar | nuevos datos )
        const eventUpdated = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } )

        res.json({
            ok: true,
            event: eventUpdated
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el adminnistrador.'
        })
    }

    res.status(400).json({
        ok: true,
        eventId
    })

}

const deleteEvent = async(req, res = response) => {

    const eventId = req.params.id
    const uid = req.uid

    try {

        const event = await Event.findById( eventId )
        // Si el Evento a actualizar a través de su ID existe:
        if(!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento con ese ID no existe.'
            })
        }

        if( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegios para eliminar este evento.'
            })
        }

        await Event.findByIdAndDelete( eventId )

        res.json({
            ok: true
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el adminnistrador.'
        })
    }

}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}