import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
})

export default model('User', userSchema);