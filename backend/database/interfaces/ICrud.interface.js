class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Expcetion");
  }
}

class ICrud {
  create() {
    throw new NotImplementedException();
  }

  read() {
    throw new NotImplementedException();
  }

  update() {
    throw new NotImplementedException();
  }

  delete() {
    throw new NotImplementedException();
  }

  connect() {
    throw new NotImplementedException();
  }

  isConnected() {
    throw new NotImplementedException();
  }
}

module.exports = ICrud;