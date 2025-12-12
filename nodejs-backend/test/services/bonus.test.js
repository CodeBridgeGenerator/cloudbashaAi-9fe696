const assert = require("assert");
const app = require("../../src/app");

describe("bonus service", () => {
  let thisService;
  let bonusCreated;

  beforeEach(async () => {
    thisService = await app.service("bonus");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (bonus)");
  });

  describe("#create", () => {
    const options = {"slide":23,"sectionName":"new value"};

    beforeEach(async () => {
      bonusCreated = await thisService.create(options);
    });

    it("should create a new bonus", () => {
      assert.strictEqual(bonusCreated.slide, options.slide);
assert.strictEqual(bonusCreated.sectionName, options.sectionName);
    });
  });

  describe("#get", () => {
    it("should retrieve a bonus by ID", async () => {
      const retrieved = await thisService.get(bonusCreated._id);
      assert.strictEqual(retrieved._id, bonusCreated._id);
    });
  });

  describe("#update", () => {
    let bonusUpdated;
    const options = {"slide":100,"sectionName":"updated value"};

    beforeEach(async () => {
      bonusUpdated = await thisService.update(bonusCreated._id, options);
    });

    it("should update an existing bonus ", async () => {
      assert.strictEqual(bonusUpdated.slide, options.slide);
assert.strictEqual(bonusUpdated.sectionName, options.sectionName);
    });
  });

  describe("#delete", () => {
  let bonusDeleted;
    beforeEach(async () => {
      bonusDeleted = await thisService.remove(bonusCreated._id);
    });

    it("should delete a bonus", async () => {
      assert.strictEqual(bonusDeleted._id, bonusCreated._id);
    });
  });
});