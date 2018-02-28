import { Schema } from 'mongoose';
import { Model } from '../../model';

const sampleDaoSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
}, {
  minimize: false
});

export class SampleDaoModel extends Model {
  constructor() {
    super(sampleDaoSchema);
  }

  protected statics(): any {
    return {
      readAll: (): Promise<void> => {
        return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
          this.model.find({}, '-__v -_id', (err: any, docs: any) => {
            err ? reject(err) : resolve(docs);
          });
        });
      },

      read: (_name: string): Promise<void> => {
        return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
          this.model.findOne({name: _name}, (err: any, docs: any) => {
            err ? reject(err) : resolve(docs);
          });
        });
      },

      create: (_name: string): Promise<void> => {
        return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
          new this.model({name: _name}).save((err: any, docs: any) => {
            err ? reject(err) : resolve(docs);
          });
        });
      },

      delete: (_name: string): Promise<void> => {
        return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
          this.model.findOneAndRemove({name: _name}, (err: any, docs: any) => {
            err ? reject(err) : resolve(docs);
          });
        });
      }
    };
  }
}
