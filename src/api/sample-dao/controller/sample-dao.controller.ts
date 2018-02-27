import { Request, Response } from 'express';
import { SampleDao } from '../dao/sample-dao.dao';
import { logger } from '../../../utils/logger.utils';
import { Controller } from '../../controller';

export class SampleDaoController extends Controller {
  constructor() {
    super();
  }

  public readAll(req: Request, res: Response): void {
    SampleDao.readAll()
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  }

  public read(req: Request, res: Response): void {
    SampleDao.read(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  }

  public create(req: Request, res: Response): void {
    SampleDao.create(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => {
        logger.error(err);
        res.status(400).json(err);
      });
  }

  public delete(req: Request, res: Response): void {
    SampleDao.delete(req.params.name)
      .then((docs: any) => {
        res.json(docs);
      })
      .catch((err: any) => res.status(400).json(err));
  }
}
