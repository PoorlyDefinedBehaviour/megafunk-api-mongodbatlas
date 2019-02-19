class Context {
  constructor(database) {
    this.database = database;
  }

  create(document) {
    return this.database.create(document);
  }

  read(id) {
    return this.database.read(id)
  }

  update(id, data) {
    return this.database.update(id, data);
  }

  delete(id) {
    return this.database.delete(id);
  }

  static connect() {
    this.database.connect();
  }

  isConnected() {
    this.database.isConnected();
  }
}

module.exports = Context;