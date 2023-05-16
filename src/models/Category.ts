import {Schema, model} from 'mongoose';

const categorySchema = new Schema({
    id: Number,
    name: String,
    urlImage: String,
})

export default model('Category', categorySchema);