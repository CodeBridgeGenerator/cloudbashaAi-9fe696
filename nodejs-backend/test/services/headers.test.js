const assert = require("assert");
const app = require("../../src/app");

describe("headers service", () => {
  let thisService;
  let headerCreated;

  beforeEach(async () => {
    thisService = await app.service("headers");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (headers)");
  });

  describe("#create", () => {
    const options = {"icon":"new value","featureName":"new value","description":"new value"};

    beforeEach(async () => {
      headerCreated = await thisService.create(options);
    });

    it("should create a new header", () => {
      assert.strictEqual(headerCreated.icon, options.icon);
assert.strictEqual(headerCreated.featureName, options.featureName);
assert.strictEqual(headerCreated.description, options.description);
    });
  });

  describe("#get", () => {
    it("should retrieve a header by ID", async () => {
      const retrieved = await thisService.get(headerCreated._id);
      assert.strictEqual(retrieved._id, headerCreated._id);
    });
  });

  describe("#update", () => {
    let headerUpdated;
    const options = {"icon":"updated value","featureName":"updated value","description":"updated value"};

    beforeEach(async () => {
      headerUpdated = await thisService.update(headerCreated._id, options);
    });

    it("should update an existing header ", async () => {
      assert.strictEqual(headerUpdated.icon, options.icon);
assert.strictEqual(headerUpdated.featureName, options.featureName);
assert.strictEqual(headerUpdated.description, options.description);
    });
  });

  describe("#delete", () => {
  let headerDeleted;
    beforeEach(async () => {
      headerDeleted = await thisService.remove(headerCreated._id);
    });

    it("should delete a header", async () => {
      assert.strictEqual(headerDeleted._id, headerCreated._id);
    });
  });
});