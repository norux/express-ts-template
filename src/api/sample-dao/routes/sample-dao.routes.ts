import { Routes } from '../../routes';
import { SampleDaoController } from '../controller/sample-dao.controller';

export class SampleDaoRoutes extends Routes {
  constructor() {
    super();
  }

  protected routes(): void {
    const ctrl = new SampleDaoController();

    this.router
      .route('/')
      .get(ctrl.readAll)
      .all(ctrl.badRequest);

    this.router
      .route('/:name')
      .get(ctrl.read)
      .post(ctrl.create)
      .delete(ctrl.delete)
      .all(ctrl.badRequest);
  }
}