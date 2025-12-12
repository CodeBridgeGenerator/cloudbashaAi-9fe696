const assert = require("assert");
const app = require("../../src/app");

describe("phrases service", () => {
  let thisService;
  let phraseCreated;

  beforeEach(async () => {
    thisService = await app.service("phrases");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (phrases)");
  });

  describe("#create", () => {
    const options = {"title":"new value","description":"new value","tagline":"new value","visible":true};

    beforeEach(async () => {
      phraseCreated = await thisService.create(options);
    });

    it("should create a new phrase", () => {
      assert.strictEqual(phraseCreated.title, options.title);
assert.strictEqual(phraseCreated.description, options.description);
assert.strictEqual(phraseCreated.tagline, options.tagline);
assert.strictEqual(phraseCreated.visible, options.visible);
    });
  });

  describe("#get", () => {
    it("should retrieve a phrase by ID", async () => {
      const retrieved = await thisService.get(phraseCreated._id);
      assert.strictEqual(retrieved._id, phraseCreated._id);
    });
  });

  describe("#update", () => {
    let phraseUpdated;
    const options = {"title":"updated value","description":"updated value","tagline":"updated value","visible":false};

    beforeEach(async () => {
      phraseUpdated = await thisService.update(phraseCreated._id, options);
    });

    it("should update an existing phrase ", async () => {
      assert.strictEqual(phraseUpdated.title, options.title);
assert.strictEqual(phraseUpdated.description, options.description);
assert.strictEqual(phraseUpdated.tagline, options.tagline);
assert.strictEqual(phraseUpdated.visible, options.visible);
    });
  });

  describe("#delete", () => {
  let phraseDeleted;
    beforeEach(async () => {
      phraseDeleted = await thisService.remove(phraseCreated._id);
    });

    it("should delete a phrase", async () => {
      assert.strictEqual(phraseDeleted._id, phraseCreated._id);
    });
  });
});