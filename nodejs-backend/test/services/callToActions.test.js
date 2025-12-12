const assert = require("assert");
const app = require("../../src/app");

describe("callToActions service", () => {
  let thisService;
  let callToActionCreated;

  beforeEach(async () => {
    thisService = await app.service("callToActions");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (callToActions)");
  });

  describe("#create", () => {
    const options = {"heading":"new value","subHeading":"new value","button":"new value"};

    beforeEach(async () => {
      callToActionCreated = await thisService.create(options);
    });

    it("should create a new callToAction", () => {
      assert.strictEqual(callToActionCreated.heading, options.heading);
assert.strictEqual(callToActionCreated.subHeading, options.subHeading);
assert.strictEqual(callToActionCreated.button, options.button);
    });
  });

  describe("#get", () => {
    it("should retrieve a callToAction by ID", async () => {
      const retrieved = await thisService.get(callToActionCreated._id);
      assert.strictEqual(retrieved._id, callToActionCreated._id);
    });
  });

  describe("#update", () => {
    let callToActionUpdated;
    const options = {"heading":"updated value","subHeading":"updated value","button":"updated value"};

    beforeEach(async () => {
      callToActionUpdated = await thisService.update(callToActionCreated._id, options);
    });

    it("should update an existing callToAction ", async () => {
      assert.strictEqual(callToActionUpdated.heading, options.heading);
assert.strictEqual(callToActionUpdated.subHeading, options.subHeading);
assert.strictEqual(callToActionUpdated.button, options.button);
    });
  });

  describe("#delete", () => {
  let callToActionDeleted;
    beforeEach(async () => {
      callToActionDeleted = await thisService.remove(callToActionCreated._id);
    });

    it("should delete a callToAction", async () => {
      assert.strictEqual(callToActionDeleted._id, callToActionCreated._id);
    });
  });
});