import { Request, Response } from 'express';
import { Model } from './model';

export abstract class Controller {
  protected dao?: any;

  constructor(protected model?: Model) {
    if(this.model) {
      this.dao = this.model.getModel();
    }
  }

  public badRequest = (req: Request, res: Response): void => {
    res.status(400).send('Bad Request');
  };

  public forbidden = (req: Request, res: Response): void => {
    res.status(403).send('Forbidden');
  };

  public methodNotAllowed = (req: Request, res: Response): void => {
    res.status(405).send('Method Not Allowed');
  };

  public notAcceptable = (req: Request, res: Response): void => {
    res.status(406).send('Not Acceptable');
  };

  public requestTimeout = (req: Request, res: Response): void => {
    res.status(408).send('Request Timeout');
  };

  public conflict = (req: Request, res: Response): void => {
    res.status(409).send('Conflict');
  };

}