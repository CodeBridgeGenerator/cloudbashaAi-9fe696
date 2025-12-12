const assert = require("assert");
const app = require("../../src/app");

describe("cms service", () => {
  let thisService;
  let cmCreated;

  beforeEach(async () => {
    thisService = await app.service("cms");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (cms)");
  });

  describe("#create", () => {
    const options = {"name":"new value","path":"new value","image1":"new value","image2":"new value","category":"new value","headerContent":"new value","bodyContent":"new value","disclaimer":"new value","visible":true,"bodyList":"new value"};

    beforeEach(async () => {
      cmCreated = await thisService.create(options);
    });

    it("should create a new cm", () => {
      assert.strictEqual(cmCreated.name, options.name);
assert.strictEqual(cmCreated.path, options.path);
assert.strictEqual(cmCreated.image1, options.image1);
assert.strictEqual(cmCreated.image2, options.image2);
assert.strictEqual(cmCreated.category, options.category);
assert.strictEqual(cmCreated.headerContent, options.headerContent);
assert.strictEqual(cmCreated.bodyContent, options.bodyContent);
assert.strictEqual(cmCreated.disclaimer, options.disclaimer);
assert.strictEqual(cmCreated.visible, options.visible);
assert.strictEqual(cmCreated.bodyList, options.bodyList);
    });
  });

  describe("#get", () => {
    it("should retrieve a cm by ID", async () => {
      const retrieved = await thisService.get(cmCreated._id);
      assert.strictEqual(retrieved._id, cmCreated._id);
    });
  });

  describe("#update", () => {
    let cmUpdated;
    const options = {"name":"updated value","path":"updated value","image1":"updated value","image2":"updated value","category":"updated value","headerContent":"updated value","bodyContent":"updated value","disclaimer":"updated value","visible":false,"bodyList":"updated value"};

    beforeEach(async () => {
      cmUpdated = await thisService.update(cmCreated._id, options);
    });

    it("should update an existing cm ", async () => {
      assert.strictEqual(cmUpdated.name, options.name);
assert.strictEqual(cmUpdated.path, options.path);
assert.strictEqual(cmUpdated.image1, options.image1);
assert.strictEqual(cmUpdated.image2, options.image2);
assert.strictEqual(cmUpdated.category, options.category);
assert.strictEqual(cmUpdated.headerContent, options.headerContent);
assert.strictEqual(cmUpdated.bodyContent, options.bodyContent);
assert.strictEqual(cmUpdated.disclaimer, options.disclaimer);
assert.strictEqual(cmUpdated.visible, options.visible);
assert.strictEqual(cmUpdated.bodyList, options.bodyList);
    });
  });

  describe("#delete", () => {
  let cmDeleted;
    beforeEach(async () => {
      cmDeleted = await thisService.remove(cmCreated._id);
    });

    it("should delete a cm", async () => {
      assert.strictEqual(cmDeleted._id, cmCreated._id);
    });
  });
});