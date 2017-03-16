const chai = require('chai');
const chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('Routing', () => {
  let server;

  // Restart server before each test
  beforeEach(() => {

    // Bust the require cache to ensure app is restarted cleanly
    /* eslint-disable */
    delete require.cache[require.resolve('../app')];
    server = require('../app');
    /* eslint-enable */
  });

  // Close server after each test
  afterEach(done => server.close(done));

  ///////////////////////////////////////////////////////////////////

  let routes = ['/', '/cselabs', '/cseday', '/devfair', '/late-night', '/dynamic'];

  routes.forEach(route => {
    describe('GET ' + route, () => {
      it('should return an html page with status 200', done => {
        chai.request(server)
          .get(route)
          .end((err, res) => {
            if (err) return done(err);

            res.should.have.status(200);
            done();
          });
      });
    });
  });

  describe('GET invalid page', () => {
    it('should return a 404 error', done => {
      chai.request(server)
        .get('/invalidroutewoo')
        .end((err, res) => {
          if (!err || !res) return done(err);
          err.should.have.status(404);
          res.should.have.status(404);
          done();
        });
    });
  });
});
