require("dotenv").config();
const ICrud = require("../interfaces/ICrud.interface");
const Mongoose = require("mongoose");

class MongoDB extends ICrud {
  constructor(connection, schema) {
    super();
    this.connection = connection;
    this.schema = schema;
  }
  create(document) {
    this.schema.create(document);
  }

  read(item) {
    return this.schema.find(item);
  }

  update() {
    this.schema.update();
  }

  delete() {
    this.schema.delete();
  }

  static connect() {
    Mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }, err => {
      if (err)
        throw err;
    });

    Mongoose.connection.once("open", () => {
      console.log("Successfully connected to the database");
    });

    return Mongoose.connection;
  }

  isConnected() {
    return this.connection ? true : false;
  }
}

module.exports = MongoDB;