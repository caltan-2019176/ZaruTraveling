import { Schema, model } from "mongoose"

const reservationSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    hotel: {
        type: Schema.Types.ObjectId,
        ref: 'hotel',
        required: true
    },
    room: {
        type: Schema.Types.ObjectId,
        ref: 'room',
        required: true
    },
    entryDate: {
        type: Date,
        required: true
    },
    exitDate: {
        type: Date,
        required: true
    },
    quantityPeople:{
        type: Number,
        required: true
    },

    status: {
        type: String,
        enum: ['confirmed', 'pending', 'cancelled'],
        default: 'pending'
    }
}, {
    versionKey: false
});

export default model('reservation', reservationSchema)