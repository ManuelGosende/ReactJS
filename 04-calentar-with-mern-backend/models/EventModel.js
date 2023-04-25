const { Schema, model } = require('mongoose')

const EventSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User', // Esto es una referencia al UserModel, para saber quién creó el evento.
        required: true
    }

})

// Para eliminar __v y _id de POSTMAN.
EventSchema.method('toJSON', function() {
    // Esto es el objeto que se está serializando en EventSchema, con el title, end, user, etc.
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Event', EventSchema)