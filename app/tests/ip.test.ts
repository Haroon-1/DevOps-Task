import supertest from 'supertest';
import app from '../src/app';

describe('GET /ip', () => {
  it('should return 200 OK status', done => {
    supertest(app).get('/ip').expect(200, done);
  });

  it('should return JSON content-type', done => {
    supertest(app).get('/ip').expect('Content-Type', /json/).end(done);
  });
});


