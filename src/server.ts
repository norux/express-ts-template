import * as express from 'express';
import { createServer as httpCreateServer, Server as HttpServer } from 'http';
import { createServer as httpsCreateServer, Server as HttpsServer } from 'https';
import { ServerConfig } from './config/server.config';
import { logger } from './utils/logger.utils';
import { Protocol } from "./utils/common.utils";

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.routing();
  }

  public start(): void {
    switch(ServerConfig.protocol) {
      case Protocol.http:
        this.http();
        break;

      case Protocol.https:
        this.https();
        break;

      default:
        this.https();
        break;
    }
  }

  private http(): HttpServer {
    return this.app
      .listen(ServerConfig.port, ServerConfig.ip, () => {
        logger.info(`HTTP Server listening at ${ServerConfig.port}`);
      })
      .on('error', (err: Error) => logger.error(err.message));
  }

  private https(): HttpsServer {
    return httpsCreateServer({
      cert: ServerConfig.tls.cert,
      key: ServerConfig.tls.key
    }, this.app)
      .listen(ServerConfig.port, ServerConfig.ip, () => {
        logger.info(`HTTPS Server listening at ${ServerConfig.port}`);
      })
      .on('error', (err: Error) => logger.error(err.message));
  }

  private routing() {
    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      logger.info('hello world');
      res.send('Hello world');
    });
  }
}