import { NextFunction, Request, Response, Router } from 'express';

export abstract class Routes {
  protected router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public getRouter(): Router {
    return this.router;
  }

  protected abstract routes(): void;
}