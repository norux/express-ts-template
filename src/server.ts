import * as express from "express";
import { createServer as httpCreateServer } from 'http';
import { createServer as httpsCreateServer } from 'https';
import { ServerConfig } from "./config/server.config";
import { Server as HttpServer } from "http";
import { Server as HttpsServer } from "https";

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.routing();
  }

  private routing() {
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.log('hello world');
      res.send("Hello world");
    });
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
      key: ServerConfig.tls.key,
      cert: ServerConfig.tls.cert
    }, this.app).listen(ServerConfig.port, ServerConfig.ip, () => {
      console.log(`HTTPS Server listening at ${ServerConfig.port}`);
    }).on('error', err => console.error(err));
  }
}