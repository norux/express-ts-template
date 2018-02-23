import expect = require('expect');
import { CommonUtils } from "./common.utils";

describe('common.utils', () => {
  describe('isProdMode() - Production Mode Test', () => {
    it('NODE_ENV=production, but All lowercase', () => {
      process.env.NODE_ENV = 'production';
      expect(CommonUtils.isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but lowercase & uppercase', () => {
      process.env.NODE_ENV = 'ProDucTion';
      expect(CommonUtils.isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but uppercase', () => {
      process.env.NODE_ENV = 'PRODUCTION';
      expect(CommonUtils.isProdMode()).toBeTruthy();
    });

    it('NODE_ENV=production, but Misspelled', () => {
      process.env.NODE_ENV = 'pproduction';
      expect(CommonUtils.isProdMode()).toBeFalsy();
    });

    it('NODE_ENV=development', () => {
      process.env.NODE_ENV = 'development';
      expect(CommonUtils.isProdMode()).toBeFalsy();
    });

    it('NODE_ENV={null_str}. When environment variable has null string', () => {
      process.env.NODE_ENV = '';
      expect(CommonUtils.isProdMode()).toBeFalsy();
    });
  });

  describe('Getting Directory Functions Test', () => {
    it('rootDir() = {projectDir} ', () => {
      expect(CommonUtils.rootDir()).toEqual(process.cwd());
    });

    it('srcDir() = {projectDir}/src', () => {
      expect(CommonUtils.srcDir()).toEqual(process.cwd() + '/src');
    });

    it('configDir() = {projectDir}/src/config', () => {
      expect(CommonUtils.configDir()).toEqual(process.cwd() + '/src/config');
    });

    it('caDir() = {projectDir}/src/config/ca', () => {
      expect(CommonUtils.caDir()).toEqual(process.cwd() + '/src/config/ca');
    });
  });
});