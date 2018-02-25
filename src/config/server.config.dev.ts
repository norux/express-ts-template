import { join } from 'path';
import { readFileSync } from 'fs';
import { IServerConfig } from './server.config';
import { CommonUtils } from '../utils/common.utils';

export const developmentMode: IServerConfig = {
  ip: 'localhost',
  port: Number(process.env.PORT) || 8080,
  protocol: CommonUtils.Protocol.https,
  tls: {
    cert: readFileSync(join(CommonUtils.caDir(), 'server-crt.pem')),
    key: readFileSync(join(CommonUtils.caDir(), 'server-key.pem'))
  }
};
