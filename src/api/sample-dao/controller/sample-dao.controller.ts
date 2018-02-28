import { Request, Response } from 'express';
import { logger } from '../../../utils/logger.utils';
import { Controller } from '../../controller';
import { SampleDaoModel } from '../model/sample-dao.model';

export class SampleDaoController extends Controller {
  constructor() {
    super(new SampleDaoModel());
  }

  public readAll = (req: Request, res: Response): void => {
    this.dao.readAll()
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  };

  public read = (req: Request, res: Response): void => {
    this.dao.read(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  };

  public create = (req: Request, res: Response): void => {
    this.dao.create(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => {
        logger.error(err);
        res.status(400).json(err);
      });
  };

  public delete = (req: Request, res: Response): void => {
    this.dao.delete(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  };
}
