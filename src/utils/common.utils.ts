import { join } from 'path';

/**
 * @enum        Protocol
 * @description Define protocol enum value
 */
export enum Protocol {
  http = 0,
  https
}

/**
 * @function    isProdMode
 * @description Return current mode whether Production mode or Development mode
 * @returns     {boolean}
 *              true:  Production mode
 *              false: Development mode
 */
export const isProdMode = (): boolean => !!(process.env.NODE_ENV && (process.env.NODE_ENV.trim().toLowerCase() === 'production'));


/**
 * @const rootDir    : {projectRoot}
 *        srcDir     : {projectRoot}/src
 *        configDir  : {projectRoot}/src/config
 *        caDir      : {projectRoot}/src/config/ca
 *        logsDir    : {projectRoot}/logs
 */
export const rootDir: string    = process.cwd();
export const srcDir: string     = join(rootDir, 'src');
export const configDir: string  = join(srcDir, 'config');
export const caDir: string      = join(configDir, 'ca');
export const logsDir: string    = join(rootDir, 'logs');
