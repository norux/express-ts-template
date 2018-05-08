import { productionMode as prod } from './server.config.prod';
import { developmentMode as dev } from './server.config.dev';

import { Protocol, isProdMode  } from '../utils/common.utils';
import { SecureContextOptions as ITls } from 'tls';

export interface IServerConfig {
  ip: string;
  port: number;
  protocol: Protocol;
  tls: ITls;
  staticDir: string[];
}

export namespace ServerConfig {
  const conf: IServerConfig = isProdMode() ? prod : dev;

  export const ip: string           = conf.ip;
  export const port: number         = conf.port;
  export const protocol: Protocol   = conf.protocol;
  export const tls: ITls            = conf.tls;
  export const staticDir: string[]  = conf.staticDir;
}
