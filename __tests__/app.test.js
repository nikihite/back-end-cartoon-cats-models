const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('cats routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of cats', async () => {
    const resp = await request(app).get('/cats');
    expect(resp.body.length).toEqual(8);
    expect(resp.body[0]).toEqual({
      id: expect.any(String),
      name: expect.any(String)
    });
  });
  it('GET /cats/:id should return cat detail', async () => {
    const resp = await request(app).get('/cats/1');
    expect(resp.body).toEqual({
      id: '1',
      name: 'Felix',
      type: 'Tuxedo',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Felix_the_cat.svg/200px-Felix_the_cat.svg.png',
      year: 1892,
      lives: 3,
      isSidekick: false,
    });
  });

  afterAll(() => {
    pool.end();
  });
});
