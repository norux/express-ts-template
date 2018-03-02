import chai = require('chai');
import chaiHttp = require('chai-http');
import { Server } from '../../../server';
import expect = require('expect');

describe('hello-world Routes', () => {
  const server: Server = new Server();
  server.start();
  chai.use(chaiHttp);
  const request = chai.request(server.getApp());

  describe('GET /api/hello-world', () => {
    it('Successfully Request: "200 OK, Read hello-world"', (done: MochaDone) => {
      request
        .get('/api/hello-world')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual(JSON.stringify('Read hello-world'));
          done();
        });
    });

    it('Wrong Request(Having unnecessary parameter): "404 Error"', (done: MochaDone) => {
      request
        .get('/api/hello-world/1')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(404);
          done();
        });
    });
  });

  describe('POST /api/hello-world', () => {
    it('Successfully Request "200 OK, create hello-world"', (done: MochaDone) => {
      request
        .post('/api/hello-world')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual(JSON.stringify('create hello-world'));
          done();
        });
    });
  });

  describe('PUT /api/hello-world', () => {
    it('Successfully Request "200 OK, update hello-world"', (done: MochaDone) => {
      request
        .put('/api/hello-world')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual(JSON.stringify('update hello-world'));
          done();
        });
    });
  });

  describe('DELETE /api/hello-world', () => {
    it('Successfully Request "200 OK, delete hello-world"', (done: MochaDone) => {
      request
        .del('/api/hello-world')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(200);
          expect(res.text).toEqual(JSON.stringify('delete hello-world'));
          done();
        });
    });
  });

  describe('PATCH /api/hello-world', () => {
    it('Wrong Request(Undefined PATCH Method): "400 Bad Request"', (done: MochaDone) => {
      request
        .patch('/api/hello-world')
        .end((err: any, res: any): any => {
          expect(res.status).toEqual(400);
          expect(res.text).toEqual('Bad Request');
          done();
        });
    });
  });
});