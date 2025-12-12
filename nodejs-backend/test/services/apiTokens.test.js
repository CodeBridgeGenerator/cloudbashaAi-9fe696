const assert = require("assert");
const app = require("../../src/app");

describe("apiTokens service", () => {
  let thisService;
  let apiTokenCreated;

  beforeEach(async () => {
    thisService = await app.service("apiTokens");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (apiTokens)");
  });

  describe("#create", () => {
    const options = {"company":"new value","apiKey":"new value","apiSecret":"new value","accessToken":"new value","createdDate":23,"expiryDate":23,"status":"new value","environment":"new value","notes":"new value"};

    beforeEach(async () => {
      apiTokenCreated = await thisService.create(options);
    });

    it("should create a new apiToken", () => {
      assert.strictEqual(apiTokenCreated.company, options.company);
assert.strictEqual(apiTokenCreated.apiKey, options.apiKey);
assert.strictEqual(apiTokenCreated.apiSecret, options.apiSecret);
assert.strictEqual(apiTokenCreated.accessToken, options.accessToken);
assert.strictEqual(apiTokenCreated.createdDate, options.createdDate);
assert.strictEqual(apiTokenCreated.expiryDate, options.expiryDate);
assert.strictEqual(apiTokenCreated.status, options.status);
assert.strictEqual(apiTokenCreated.environment, options.environment);
assert.strictEqual(apiTokenCreated.notes, options.notes);
    });
  });

  describe("#get", () => {
    it("should retrieve a apiToken by ID", async () => {
      const retrieved = await thisService.get(apiTokenCreated._id);
      assert.strictEqual(retrieved._id, apiTokenCreated._id);
    });
  });

  describe("#update", () => {
    let apiTokenUpdated;
    const options = {"company":"updated value","apiKey":"updated value","apiSecret":"updated value","accessToken":"updated value","createdDate":100,"expiryDate":100,"status":"updated value","environment":"updated value","notes":"updated value"};

    beforeEach(async () => {
      apiTokenUpdated = await thisService.update(apiTokenCreated._id, options);
    });

    it("should update an existing apiToken ", async () => {
      assert.strictEqual(apiTokenUpdated.company, options.company);
assert.strictEqual(apiTokenUpdated.apiKey, options.apiKey);
assert.strictEqual(apiTokenUpdated.apiSecret, options.apiSecret);
assert.strictEqual(apiTokenUpdated.accessToken, options.accessToken);
assert.strictEqual(apiTokenUpdated.createdDate, options.createdDate);
assert.strictEqual(apiTokenUpdated.expiryDate, options.expiryDate);
assert.strictEqual(apiTokenUpdated.status, options.status);
assert.strictEqual(apiTokenUpdated.environment, options.environment);
assert.strictEqual(apiTokenUpdated.notes, options.notes);
    });
  });

  describe("#delete", () => {
  let apiTokenDeleted;
    beforeEach(async () => {
      apiTokenDeleted = await thisService.remove(apiTokenCreated._id);
    });

    it("should delete a apiToken", async () => {
      assert.strictEqual(apiTokenDeleted._id, apiTokenCreated._id);
    });
  });
});