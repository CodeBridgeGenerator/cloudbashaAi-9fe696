const assert = require("assert");
const app = require("../../src/app");

describe("formGenerator service", () => {
  let thisService;
  let formGeneratorCreated;

  beforeEach(async () => {
    thisService = await app.service("formGenerator");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (formGenerator)");
  });

  describe("#create", () => {
    const options = {"goal":"new value","status":"new value","formResponses":"new value","dashboardData":{"key":"new value"},"rawGeminiResponse":"new value","generationError":"new value","user":"new value","isPublic":true,"publicUrl":"new value"};

    beforeEach(async () => {
      formGeneratorCreated = await thisService.create(options);
    });

    it("should create a new formGenerator", () => {
      assert.strictEqual(formGeneratorCreated.goal, options.goal);
assert.strictEqual(formGeneratorCreated.status, options.status);
assert.strictEqual(formGeneratorCreated.formResponses, options.formResponses);
assert.strictEqual(formGeneratorCreated.dashboardData, options.dashboardData);
assert.strictEqual(formGeneratorCreated.rawGeminiResponse, options.rawGeminiResponse);
assert.strictEqual(formGeneratorCreated.generationError, options.generationError);
assert.strictEqual(formGeneratorCreated.user, options.user);
assert.strictEqual(formGeneratorCreated.isPublic, options.isPublic);
assert.strictEqual(formGeneratorCreated.publicUrl, options.publicUrl);
    });
  });

  describe("#get", () => {
    it("should retrieve a formGenerator by ID", async () => {
      const retrieved = await thisService.get(formGeneratorCreated._id);
      assert.strictEqual(retrieved._id, formGeneratorCreated._id);
    });
  });

  describe("#update", () => {
    let formGeneratorUpdated;
    const options = {"goal":"updated value","status":"updated value","formResponses":"updated value","dashboardData":{"key":"updated value"},"rawGeminiResponse":"updated value","generationError":"updated value","user":"updated value","isPublic":false,"publicUrl":"updated value"};

    beforeEach(async () => {
      formGeneratorUpdated = await thisService.update(formGeneratorCreated._id, options);
    });

    it("should update an existing formGenerator ", async () => {
      assert.strictEqual(formGeneratorUpdated.goal, options.goal);
assert.strictEqual(formGeneratorUpdated.status, options.status);
assert.strictEqual(formGeneratorUpdated.formResponses, options.formResponses);
assert.strictEqual(formGeneratorUpdated.dashboardData, options.dashboardData);
assert.strictEqual(formGeneratorUpdated.rawGeminiResponse, options.rawGeminiResponse);
assert.strictEqual(formGeneratorUpdated.generationError, options.generationError);
assert.strictEqual(formGeneratorUpdated.user, options.user);
assert.strictEqual(formGeneratorUpdated.isPublic, options.isPublic);
assert.strictEqual(formGeneratorUpdated.publicUrl, options.publicUrl);
    });
  });

  describe("#delete", () => {
  let formGeneratorDeleted;
    beforeEach(async () => {
      formGeneratorDeleted = await thisService.remove(formGeneratorCreated._id);
    });

    it("should delete a formGenerator", async () => {
      assert.strictEqual(formGeneratorDeleted._id, formGeneratorCreated._id);
    });
  });
});