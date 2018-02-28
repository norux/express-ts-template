import { model, Schema } from 'mongoose';

export abstract class Model {
  protected model: any;

  constructor(protected schema: Schema) {
    this.schema.statics = this.statics();
    this.model = model<any>(this.constructor.name, this.schema);
  }

  public getModel = (): any => {
    return this.model;
  };

  protected abstract statics(): any;
}