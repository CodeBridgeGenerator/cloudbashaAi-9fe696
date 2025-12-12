const assert = require("assert");
const app = require("../../src/app");

describe("contents service", () => {
  let thisService;
  let contentCreated;

  beforeEach(async () => {
    thisService = await app.service("contents");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (contents)");
  });

  describe("#create", () => {
    const options = {"step":23,"title":"new value","description":"new value"};

    beforeEach(async () => {
      contentCreated = await thisService.create(options);
    });

    it("should create a new content", () => {
      assert.strictEqual(contentCreated.step, options.step);
assert.strictEqual(contentCreated.title, options.title);
assert.strictEqual(contentCreated.description, options.description);
    });
  });

  describe("#get", () => {
    it("should retrieve a content by ID", async () => {
      const retrieved = await thisService.get(contentCreated._id);
      assert.strictEqual(retrieved._id, contentCreated._id);
    });
  });

  describe("#update", () => {
    let contentUpdated;
    const options = {"step":100,"title":"updated value","description":"updated value"};

    beforeEach(async () => {
      contentUpdated = await thisService.update(contentCreated._id, options);
    });

    it("should update an existing content ", async () => {
      assert.strictEqual(contentUpdated.step, options.step);
assert.strictEqual(contentUpdated.title, options.title);
assert.strictEqual(contentUpdated.description, options.description);
    });
  });

  describe("#delete", () => {
  let contentDeleted;
    beforeEach(async () => {
      contentDeleted = await thisService.remove(contentCreated._id);
    });

    it("should delete a content", async () => {
      assert.strictEqual(contentDeleted._id, contentCreated._id);
    });
  });
});