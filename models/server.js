const express = require('express');
const cors = require('cors');


class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.middlewares();
    this.routes();
  }

  middlewares() {
    // cors
    this.app.use(cors());

    // Body Parser
    this.app.use(express.json());

    // public path
    this.app.use(express.static('public'));
  }

  routes() {

    this.app.use('/api/users', require('../routes/user.routes'));

    // Route not found (404)
    this.app.use((req, res) => {
      return res.status(404).send({ code: 'NOT_FOUND_ROUTE', message: `Route ${req.url} Not found.` });
    });

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Listen on port: ${this.port}`);
    });
  }
}

module.exports = Server;