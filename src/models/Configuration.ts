import {Schema, model} from 'mongoose';

const configurationSchema = new Schema({
  key: String,
});

export default model('Configuration', configurationSchema);