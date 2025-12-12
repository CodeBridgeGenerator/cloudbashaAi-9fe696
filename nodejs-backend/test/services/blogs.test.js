const assert = require("assert");
const app = require("../../src/app");

describe("blogs service", () => {
  let thisService;
  let blogCreated;

  beforeEach(async () => {
    thisService = await app.service("blogs");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (blogs)");
  });

  describe("#create", () => {
    const options = {"title":"new value","postedOn":23,"description":"new value","image1":"new value","image2":"new value"};

    beforeEach(async () => {
      blogCreated = await thisService.create(options);
    });

    it("should create a new blog", () => {
      assert.strictEqual(blogCreated.title, options.title);
assert.strictEqual(blogCreated.postedOn, options.postedOn);
assert.strictEqual(blogCreated.description, options.description);
assert.strictEqual(blogCreated.image1, options.image1);
assert.strictEqual(blogCreated.image2, options.image2);
    });
  });

  describe("#get", () => {
    it("should retrieve a blog by ID", async () => {
      const retrieved = await thisService.get(blogCreated._id);
      assert.strictEqual(retrieved._id, blogCreated._id);
    });
  });

  describe("#update", () => {
    let blogUpdated;
    const options = {"title":"updated value","postedOn":100,"description":"updated value","image1":"updated value","image2":"updated value"};

    beforeEach(async () => {
      blogUpdated = await thisService.update(blogCreated._id, options);
    });

    it("should update an existing blog ", async () => {
      assert.strictEqual(blogUpdated.title, options.title);
assert.strictEqual(blogUpdated.postedOn, options.postedOn);
assert.strictEqual(blogUpdated.description, options.description);
assert.strictEqual(blogUpdated.image1, options.image1);
assert.strictEqual(blogUpdated.image2, options.image2);
    });
  });

  describe("#delete", () => {
  let blogDeleted;
    beforeEach(async () => {
      blogDeleted = await thisService.remove(blogCreated._id);
    });

    it("should delete a blog", async () => {
      assert.strictEqual(blogDeleted._id, blogCreated._id);
    });
  });
});