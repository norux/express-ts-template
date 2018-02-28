import { Router } from 'express';

export abstract class Routes {
  constructor(protected ctrl: any, protected router: Router = Router()) {
    this.routes();
  }

  public getRouter = (): Router => {
    return this.router;
  };

  protected abstract routes(): void;
}