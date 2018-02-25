import * as express from 'express';
import { createServer as httpCreateServer, Server as HttpServer } from 'http';
import { createServer as httpsCreateServer, Server as HttpsServer } from 'https';
import { ServerConfig } from './config/server.config';

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.routing();
  }

  public getApp() {
    return this.app;
  }

  public http(): HttpServer {
    return this.app.listen(ServerConfig.port, ServerConfig.ip, () => {
      console.log(`HTTP Server listening at ${ServerConfig.port}`);
    });
  }

  public https(): HttpsServer {
    return httpsCreateServer({
      cert: ServerConfig.tls.cert,
      key: ServerConfig.tls.key
    }, this.app).listen(ServerConfig.port, ServerConfig.ip, () => {
      console.log(`HTTPS Server listening at ${ServerConfig.port}`);
    }).on('error', err => console.error(err));
  }

  private routing() {
    this.app.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('hello world');
      res.send('Hello world');
    });
  }
}