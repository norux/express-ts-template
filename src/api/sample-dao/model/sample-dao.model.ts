import { Schema } from 'mongoose';

export const sampleDaoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  minimize: false
});
