import expect = require('expect');
import {
  isProdMode,
  rootDir,
  srcDir,
  configDir,
  caDir,
  logsDir
} from './common.utils';

describe('common.utils', () => {
  describe('isProdMode() - Production Mode Test', () => {
    it('NODE_ENV=production, but All lowercase', () => {
      process.env.NODE_ENV = 'production';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but lowercase & uppercase', () => {
      process.env.NODE_ENV = 'ProDucTion';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but uppercase', () => {
      process.env.NODE_ENV = 'PRODUCTION';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but Misspelled', () => {
      process.env.NODE_ENV = 'pproduction';
      expect(isProdMode()).toBeFalsy();
    });

    it('NODE_ENV=development', () => {
      process.env.NODE_ENV = 'development';
      expect(isProdMode()).toBeFalsy();
    });

    it('NODE_ENV={null_str}. When environment variable has null string', () => {
      process.env.NODE_ENV = '';
      expect(isProdMode()).toBeFalsy();
    });
  });

  describe('Getting Directory Value Test', () => {
    it('rootDir = {projectDir} ', () => {
      expect(rootDir).toEqual(process.cwd());
    });

    it('srcDir = {projectDir}/src', () => {
      expect(srcDir).toEqual(process.cwd() + '/src');
    });

    it('configDir = {projectDir}/src/config', () => {
      expect(configDir).toEqual(process.cwd() + '/src/config');
    });

    it('caDir = {projectDir}/src/config/ca', () => {
      expect(caDir).toEqual(process.cwd() + '/src/config/ca');
    });

    it('logsDir = {projectDir}/logs', () => {
      expect(logsDir).toEqual(process.cwd() + '/logs');
    });
  });
});