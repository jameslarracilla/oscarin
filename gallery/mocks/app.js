const bodyParser = require('body-parser');
const { imgController } = require('./controllers/imgController');

module.exports = (devServer) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }

  const { app } = devServer;

  app.use(bodyParser.json());
  app.get('/img/:id', imgController);
};
