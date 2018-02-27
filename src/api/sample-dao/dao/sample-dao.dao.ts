import { model } from 'mongoose';
import { sampleDaoSchema } from '../model/sample-dao.model';

sampleDaoSchema.statics = {
  readAll: (): Promise<void> => {
    return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
      SampleDao.find({}, '-__v -_id', (err: any, docs: any) => {
        err ? reject(err) : resolve(docs);
      });
    });
  },

  read: (_name: string): Promise<void> => {
    return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
      SampleDao.findOne({ name: _name }, (err: any, docs: any) => {
        err ? reject(err) : resolve(docs);
      });
    });
  },

  create: (_name: string): Promise<void> => {
    return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
      new SampleDao({ name: _name }).save((err: any, docs: any) => {
        err ? reject(err) : resolve(docs);
      });
    });
  },

  delete: (_name: string): Promise<void> => {
    return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
      SampleDao.findOneAndRemove({ name: _name }, (err: any, docs: any) => {
        err ? reject(err) : resolve(docs);
      });
    });
  }
};

export const SampleDao: any = model<any>('SampleDao', sampleDaoSchema);
