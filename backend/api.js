const Hapi = require("hapi");
const MongoDB = require("./database/mongodb/mongodb");
const Context = require("./database/strategies/base/context.stragegy");
const MegaFunkSchema = require("./database/mongodb/schemas/megafunk.schema");
const Routes = require("./routes/main.routes");

const app = new Hapi.Server({
  port: 5000
});

async function main() {

  const connection = await MongoDB.connect();
  const MongoContext = new Context(new MongoDB(connection, MegaFunkSchema));
  const routes = new Routes(MongoContext);
  await app.start();
  console.log("Listening on PORT 5000...");

  app.route(
    ...routes.routes
  )

  return app;
}


module.exports = main;