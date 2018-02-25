import { productionMode as prod } from './server.config.prod';
import { developmentMode as dev } from './server.config.dev';

import { CommonUtils } from '../utils/common.utils';
import { SecureContextOptions as ITls } from 'tls';

import Protocol = CommonUtils.Protocol;

export interface IServerConfig {
  ip: string;
  port: number;
  protocol: Protocol;
  tls: ITls;
}

export namespace ServerConfig {
  const conf: IServerConfig = CommonUtils.isProdMode() ? prod : dev;

  export const ip: string         = conf.ip;
  export const port: number       = conf.port;
  export const protocol: Protocol = conf.protocol;
  export const tls: ITls          = conf.tls;
}
