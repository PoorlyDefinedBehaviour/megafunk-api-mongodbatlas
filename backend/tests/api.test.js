const assert = require("assert");
const api = require("../api");

let app = {};

describe("Api testing suite", function () {
  this.beforeAll(async () => {
    app = await api();
  });
  it("Should get a document by id or all documents if id is null ", async () => {
    const expected = {
      "_id": "5c69e2509ae32123e47df8f8",
      "title": "Mega Funk Tijulandia",
      "url": "https://youtube.com/algumacoisa",
      "__v": 0
    }

    const MOCK_ID = "5c69e2509ae32123e47df8f8";

    const result = await app.inject({
      method: "GET",
      url: `/megafunk/api/${MOCK_ID}`
    });

    const [payload] = JSON.parse(result.payload);
    assert.deepEqual(payload, expected);
  });

  it("Should add a document to the database", async () => {
    const MOCK_DOCUMENT = {
      title: "some random title",
      url: "some random youtube url"
    };

    const expected = {
      "title": "some random title",
      "url": "some random youtube url",
    };

    const result = await app.inject({
      method: "POST",
      url: "/megafunk/api",
      payload: {
        ...MOCK_DOCUMENT
      }
    });

    const data = JSON.parse(result.payload);
    delete data["_id"];
    delete data["__v"];

    assert.deepEqual(data, expected);
  });

  it("Should update a document by id", async () => {
    const MOCK_ID = "5c6b7dae279a2f19608cdeff";
    const MOCK_UPDATE_DATA = {
      title: `Randomized title - ${Date.now()}`,
    };

    const result = await app.inject({
      method: "PATCH",
      url: `/megafunk/api/${MOCK_ID}`,
      payload: {
        ...MOCK_UPDATE_DATA
      }
    });

    const { nModified } = result.result;
    assert.ok(nModified === 1);
  });

  it("Should delete a document by id", async () => {
    const createDocumentResult = await app.inject({
      method: "POST",
      url: "/megafunk/api",
      payload: {
        title: "MOCK DOCUMENT FOR DELETE OPERATION",
        url: "MOCK YOUTUBE URL FOR DELETE OPERATION"
      }
    })

    const MOCK_ID = createDocumentResult.result._id;

    const result = await app.inject({
      method: "DELETE",
      url: `/megafunk/api/${MOCK_ID}`
    });

    const { deletedCount } = result.result;
    assert.ok(deletedCount === 1);
  });
});