import supertest from 'supertest';
import app from '../src/app';

describe('GET /password', () => {
  it('should return 200 OK status', done => {
    supertest(app).get('/password').expect(200, done);
  });

  it('should return JSON content-type', done => {
    supertest(app).get('/password').expect('Content-Type', /json/).end(done);
  });
});

