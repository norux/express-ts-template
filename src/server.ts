import express = require('express');
import bodyParser = require('body-parser');
import morgan = require('morgan');
import helmet = require('helmet');

import { join } from 'path';
import { createServer as httpCreateServer, Server as HttpServer } from 'http';
import { createServer as httpsCreateServer, Server as HttpsServer } from 'https';

import { ServerConfig } from './config/server.config';
import { logger } from './utils/logger.utils';
import { Protocol, srcDir, isTestMode } from './utils/common.utils';
import { LoggerInstance } from 'winston';

import { HelloWorldRoutes } from './api/hello-world/routes/hello-world.routes';
import { connect as DBConnect, connection  as DBConnection } from 'mongoose';
import { DBConfig } from './config/db.config';
import { SampleDaoRoutes } from './api/sample-dao/routes/sample-dao.routes';

export class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  public start = (): Server => {
    this.setMiddleware();
    this.setRoutes();
    this.setDB();

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

    return this;
  };

  public getApp = (): any => {
    if(!isTestMode()) {
      return logger.error('This API only can be used in Test.')
    }

    this.setMiddleware();
    this.setRoutes();
    this.setDB();

    return this.app;
  };

  private setMiddleware = (): void => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(express.static(ServerConfig.staticDir));
    this.app.use(morgan('short', {
      stream: {
        write: (message: string): LoggerInstance => logger.info(message.trim())
      }
    }));
    this.app.use(helmet());
  };

  private setRoutes = (): void => {
    /**
     * REST API
     */
    this.app.use('/api/hello-world', new HelloWorldRoutes().getRouter());
    this.app.use('/api/sample-dao', new SampleDaoRoutes().getRouter());


    this.app.route('*')
      .all((req: express.Request, res: express.Response) => {
        logger.error('404 Error');
        res.status(404).sendFile(join(srcDir, 'public', '404.html'));
      });
  };

  private setDB = (): void => {
    if(!isTestMode()) {
      DBConnect(DBConfig.url);
      DBConnection.on('error', (err: Error) => {
        logger.error('Error with the DB Conenction' + err.message);
        process.exit(1);
      });
    }
  };

  private http = (): HttpServer => {
    return httpCreateServer(this.app)
      .listen(ServerConfig.port, ServerConfig.ip, () => {
        logger.info(`HTTP Server listening at ${ServerConfig.port}`);
      })
      .on('error', (err: Error) => logger.error(err.message));
  };

  private https = (): HttpsServer => {
    return httpsCreateServer({
      cert: ServerConfig.tls.cert,
      key: ServerConfig.tls.key
    }, this.app)
      .listen(ServerConfig.port, ServerConfig.ip, () => {
        logger.info(`HTTPS Server listening at ${ServerConfig.port}`);
      })
      .on('error', (err: Error) => logger.error(err.message));
  }
}
