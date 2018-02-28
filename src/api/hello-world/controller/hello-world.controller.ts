import { Request, Response } from 'express';
import { Controller } from '../../controller';

export class HelloWorldController extends Controller {
  constructor() {
    super();
  }

  public read = (req: Request, res: Response): void => {
    res.json('Read hello-world');
  };

  public create = (req: Request, res: Response): void => {
    res.json('create hello-world');
  };

  public update = (req: Request, res: Response): void => {
    res.json('update hello-world');
  };

  public delete = (req: Request, res: Response): void => {
    res.json('delete hello-world');
  };
}