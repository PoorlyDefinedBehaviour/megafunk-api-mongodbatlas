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
    this.routes = [
      {
        method: "GET",
        path: "/megafunk/api",
        handler: (req, h) => {
          return this.database.read({});
        }
      },
      {
        method: "POST",
        path: "/megafunk/api",
        handler: (req, h) => {
          console.log(req.payload);

          //this.database.create()
        }
      }
    ]
  }
}

module.exports = Routes;