import { SampleDaoSchema } from '../model/sample-dao.model';
import { model } from 'mongoose';


SampleDaoSchema.static('readAll', (): Promise<any> => {
  return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
    SampleDao.find({}, '-__v -_id', (err: any, docs: any) => {
      err ? reject(err) : resolve(docs);
    });
  });
});

SampleDaoSchema.static('read', (_name: string): Promise<any> => {
  return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
    SampleDao.findOne({ name: _name }, (err: any, docs: any) => {
      err ? reject(err) : resolve(docs);
    });
  });
});

SampleDaoSchema.static('create', (_name: string): Promise<any> => {
  return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
    new SampleDao({ name: _name }).save((err: any, docs: any) => {
      err ? reject(err) : resolve(docs);
    });
  });
});

SampleDaoSchema.static('delete', (_name: string): Promise<any> => {
  return new Promise((resolve: (docs: any) => void, reject: (error: any) => void): void => {
    SampleDao.findOneAndRemove({ name: _name }, (err: any, docs: any) => {
      err ? reject(err) : resolve(docs);
    });
  });
});

export let SampleDao: any = model<any>('SampleDao', SampleDaoSchema);
