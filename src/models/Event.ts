import {Schema, model} from 'mongoose';

const eventSchema = new Schema({
    id: Number,
    title: String,
    eventState: Number,
    category: String,
    type: String,
    ticketPrice: Number,
    eventPlace: String,
})

export default model('Event', eventSchema);