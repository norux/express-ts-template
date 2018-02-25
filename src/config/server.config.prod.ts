import { join } from 'path';
import { readFileSync } from 'fs';
import { IServerConfig } from './server.config';
import { Protocol, caDir } from '../utils/common.utils';

export const productionMode: IServerConfig = {
  ip: 'localhost',
  port: Number(process.env.PORT) || 443,
  protocol: Protocol.https,
  tls: {
    cert: readFileSync(join(caDir, 'server-crt.pem')),
    key: readFileSync(join(caDir, 'server-key.pem'))
  }
};
