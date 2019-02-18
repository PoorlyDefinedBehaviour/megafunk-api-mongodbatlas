const assert = require("assert");
const api = require("../api");

let app = {};

describe("Api testing suite", function () {
  this.beforeAll(async () => {
    app = await api();
  });
  it("Should get element by title", async () => {
    const expected = {
      "_id": "5c69e2509ae32123e47df8f8",
      "title": "Mega Funk Tijulandia",
      "url": "https://youtube.com/algumacoisa",
      "__v": 0
    }

    const result = await app.inject({
      method: "GET",
      url: "/megafunk/api"
    });

    const [payload] = JSON.parse(result.payload);

    assert.deepEqual(payload, expected);
  });
});