import { productionMode as prod } from './db.config.prod';
import { developmentMode as dev } from './db.config.dev';

import { isProdMode  } from '../utils/common.utils';

export interface IDBConfig {
  ip?: string;
  port?: number;
  url?: string;
}

export namespace DBConfig {
  const conf: IDBConfig = isProdMode() ? prod : dev;

  export const ip: string   = conf.ip || '';
  export const port: number = conf.port || 0;
  export const url: string  = conf.url || '';
}
