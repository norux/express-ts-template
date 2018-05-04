import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import {
  LoggerInstance,
  ConsoleTransportOptions,
  FileTransportOptions,
  Logger,
  config,
  transports
} from 'winston';
import { isProdMode, isTestMode, logsDir } from './common.utils';

/* istanbul ignore next */
const makeOptions = (name: string, filename: string): ConsoleTransportOptions | FileTransportOptions => {
  const printStack = (options: any): string => {
    let message: string = '';
    if(options.meta.stack) {
      for(const stack of options.meta.stack) {
        message += '\n' + stack;
      }
    }
    return message;
  };

  return {
    name:     name,
    filename: filename,
    level:    isProdMode() ? 'info' : 'verbose',
    json:     false,
    colorize: filename === 'console',
    handleExceptions: true,
    humanReadableUnhandledException: true,

    timestamp: (): string => {
      const getLocaleISOString = (d: Date): string => {
        const pad = (n: number): string => (n < 10 ? '0' + n.toString() : n.toString());

        return d.getFullYear() +
          '-' + pad(d.getMonth() + 1) +
          '-' + pad(d.getDate()) +
          ' ' + pad(d.getHours()) +
          ':' + pad(d.getMinutes()) +
          ':' + pad(d.getSeconds()) +
          '.' + (d.getMilliseconds() / 1000).toFixed(3).slice(2, 5);
      };

      return '[' + getLocaleISOString(new Date()) + ']';
    },

    formatter: (options: any): string => {
      if(isTestMode()) return '';

      if(options.colorize) {
        return config.colorize(options.level, options.timestamp() +
          '[' + options.level.toUpperCase() + '] ' +
          options.message +
          printStack(options));
      } else {
        return options.timestamp() +
          '[' + options.level.toUpperCase() + '] ' +
          options.message +
          printStack(options);
      }
    }
  };
};

/* istanbul ignore next */
if(!existsSync(logsDir)) {
  mkdirSync(logsDir);
}

export const logger: LoggerInstance = new Logger({
  transports: [
    new (transports.Console)(makeOptions('express_console', 'console')),
    new (transports.File)(makeOptions('express_file', join(logsDir, 'debug_express.log')))
  ]
});
