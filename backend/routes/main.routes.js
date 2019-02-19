/** 
 * server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {

        return 'Hello!';
    }
});
 */

class Routes {
  constructor(database) {
    this.database = database;
  }

  read() {
    return {
      method: "GET",
      path: "/megafunk/api/{id?}",
      handler: (req, h) => {
        const { id } = req.params;
        return this.database.read(id ? { _id: id } : {});
      }
    }
  }

  create() {
    return {
      method: "POST",
      path: "/megafunk/api",
      handler: async (req, h) => {

        const result = await this.database.create(req.payload);

        return result ? result : "Result is null or undefined";
      }
    }
  }

  update() {
    return {
      method: "PATCH",
      path: "/megafunk/api/{id}",
      handler: (req, h) => {
        const { id } = req.params;
        const data = req.payload;

        return this.database.update(id, data);
      }
    }
  }

  delete() {
    return {
      method: "DELETE",
      path: "/megafunk/api/{id}",
      handler: (req, h) => {
        const { id } = req.params;

        return this.database.delete(id);
      }
    }
  }
}

module.exports = Routes;