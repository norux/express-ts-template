import { Routes } from '../../routes';
import { SampleDaoController } from '../controller/sample-dao.controller';

export class SampleDaoRoutes extends Routes {
  constructor() {
    super(new SampleDaoController());
  }

  protected routes(): void {
    this.router
      .route('/')
      .get(this.ctrl.readAll)
      .all(this.ctrl.badRequest);

    this.router
      .route('/:name')
      .get(this.ctrl.read)
      .post(this.ctrl.create)
      .delete(this.ctrl.delete)
      .all(this.ctrl.badRequest);
  }
}