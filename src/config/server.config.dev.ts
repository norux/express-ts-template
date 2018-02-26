import { join } from 'path';
import { readFileSync } from 'fs';
import { IServerConfig } from './server.config';
import { Protocol, caDir, srcDir } from '../utils/common.utils';

export const developmentMode: IServerConfig = {
  ip: 'localhost',
  port: Number(process.env.PORT) || 8080,
  protocol: Protocol.https,
  tls: {
    cert: readFileSync(join(caDir, 'server-crt.pem')),
    key: readFileSync(join(caDir, 'server-key.pem'))
  },
  staticDir: join(srcDir, 'public')
};
