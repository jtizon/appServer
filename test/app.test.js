const app = require('../app');
const expect = require('chai').expect;
const request = require('supertest');

describe('GET / apps endpoint', () => {
    it('should sort by genre', () => {
        return request(app)
          .get('/apps')
          .query({sort: 'genres'})
          .expect(200)
          .expect('Content-Type', /json/)
          .then(res => {
            expect(res.body).to.be.an('array');
            let i = 0;
            let sorted = true;
            while(sorted && i < res.body.length - 1) {
              sorted = sorted && res.body[i].title < res.body[i + 1].title;
              i++;
            }
            expect(sorted).to.be.true;
          });
      });
      
});