import { HelloWorldController } from '../controller/hello-world.controller';
import { Routes } from '../../routes';

export class HelloWorldRoutes extends Routes {
  constructor() {
    super();
  }

  protected routes(): void {
    const ctrl = new HelloWorldController();

    this.router
      .route('/')
      .get(ctrl.read)
      .post(ctrl.create)
      .put(ctrl.update)
      .delete(ctrl.delete)
      .all(ctrl.badRequest);
  }
}