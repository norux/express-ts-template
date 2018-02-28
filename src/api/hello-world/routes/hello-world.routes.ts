import { HelloWorldController } from '../controller/hello-world.controller';
import { Routes } from '../../routes';

export class HelloWorldRoutes extends Routes {
  constructor() {
    super(new HelloWorldController());
  }

  protected routes(): void {
    this.router
      .route('/')
      .get(this.ctrl.read)
      .post(this.ctrl.create)
      .put(this.ctrl.update)
      .delete(this.ctrl.delete)
      .all(this.ctrl.badRequest);
  }
}