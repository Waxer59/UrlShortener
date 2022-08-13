const express = require("express");
const cors = require("cors");
const path = require("path");
const { dbConnection } = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;

    this.paths = {
      index: "/",
      qrCreator: "/api/createUrl",
    };

    this.connectDB();

    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(cors());

    this.app.use(express.json());

    this.app.use(express.static(path.join(__dirname, "../public")));

    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use(this.paths.qrCreator, require("../routes/createUrl"));
    this.app.use(this.paths.index, require("../routes/index"));
    // 404 page
    // this.app.get("*", function (req, res) {
    //   res.status(404).sendFile(path.join(__dirname, "../public/404.html"));
    // });
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server running on: ", this.port);
    });
  }
}

module.exports = Server;
