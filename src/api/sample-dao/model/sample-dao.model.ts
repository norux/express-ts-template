import { Schema } from 'mongoose';

export const SampleDaoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true
  }
}, {
  minimize: false
});
