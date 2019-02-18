class Context {
  constructor(database) {
    this.database = database;
  }

  create(document) {
    this.database.create(document);
  }

  read(id) {
    return this.database.read(id)
  }

  update() {
    this.database.update();
  }

  delete() {
    this.database.delete();
  }

  static connect() {
    this.database.connect();
  }

  isConnected() {
    this.database.isConnected();
  }
}

module.exports = Context;