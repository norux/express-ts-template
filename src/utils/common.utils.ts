import { join } from "path";

export namespace CommonUtils {
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
  export function isProdMode(): boolean {
    return !!(process.env.NODE_ENV && (process.env.NODE_ENV.trim().toLowerCase() === 'production'));
  }

  /**
   * @function rootDir    : Return {projectRoot}
   *           srcDir     : Return {projectRoot}/src
   *           configDir  : Return {projectRoot}/src/config
   *           caDir      : Return {projectRoot}/src/config/ca
   * @returns {string}
   */
  export const rootDir    = (): string => { return process.cwd() };
  export const srcDir     = (): string => { return join(rootDir(), 'src') };
  export const configDir  = (): string => { return join(srcDir(), 'config') };
  export const caDir      = (): string => { return join(configDir(), 'ca') };

}