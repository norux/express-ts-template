import expect = require('expect');
import {
  isTestMode,
  isProdMode,
  rootDir,
  srcDir,
  configDir,
  caDir,
  logsDir
} from './common.utils';

describe('common.utils', () => {
  describe('isTestMode() - Test Mode Test', () => {
    it('NODE_ENV=test, All lowercase', () => {
      process.env.NODE_ENV = 'test';
      expect(isTestMode()).toBeTruthy();
    });

    it('NODE_ENV=test, All uppercase', () => {
      process.env.NODE_ENV = 'TEST';
      expect(isTestMode()).toBeTruthy();
    });

    it('NODE_ENV=test, Mixing lowercase & uppercase', () => {
      process.env.NODE_ENV = 'TesT';
      expect(isTestMode()).toBeTruthy();

      process.env.NODE_ENV = 'teST';
      expect(isTestMode()).toBeTruthy();
    });

    it('NODE_ENV=test, Misspelled', () => {
      process.env.NODE_ENV = 'tst';
      expect(isTestMode()).toBeFalsy();

      process.env.NODE_ENV = 'ttest';
      expect(isTestMode()).toBeFalsy();
    });

    it('NODE_ENV=test, Production or Development mode', () => {
      process.env.NODE_ENV = 'production';
      expect(isTestMode()).toBeFalsy();

      process.env.NODE_ENV = 'development';
      expect(isTestMode()).toBeFalsy();
    });
  });

  describe('isProdMode() - Production Mode Test', () => {
    it('NODE_ENV=production, All lowercase', () => {
      process.env.NODE_ENV = 'production';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, Mixing lowercase & uppercase', () => {
      process.env.NODE_ENV = 'ProDucTion';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, ALL uppercase', () => {
      process.env.NODE_ENV = 'PRODUCTION';
      expect(isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, Misspelled', () => {
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