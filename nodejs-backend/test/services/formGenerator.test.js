const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("formGenerator service", () => {
  let thisService;
  let formGeneratorCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("formGenerator");

    // Create users here
    usersServiceResults = await app.service("users").Model.create(usersRefData);
    users = {
      createdBy: usersServiceResults[0]._id,
      updatedBy: usersServiceResults[0]._id,
    };
  });

  after(async () => {
    if (usersServiceResults) {
      await Promise.all(
        usersServiceResults.map((i) =>
          app.service("users").Model.findByIdAndDelete(i._id)
        )
      );
    }
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (formGenerator)");
  });

  describe("#create", () => {
    const options = {"goal":"new value","status":"new value","formResponses":"new value","dashboardData":{"key":"new value"},"rawGeminiResponse":"new value","generationError":"new value","user":"new value","isPublic":true,"publicUrl":"new value"};

    beforeEach(async () => {
      formGeneratorCreated = await thisService.create({...options, ...users});
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
      const retrieved = await thisService.findById(formGeneratorCreated._id);
      assert.strictEqual(retrieved._id.toString(), formGeneratorCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"goal":"updated value","status":"updated value","formResponses":"updated value","dashboardData":{"key":"updated value"},"rawGeminiResponse":"updated value","generationError":"updated value","user":"updated value","isPublic":false,"publicUrl":"updated value"};

    it("should update an existing formGenerator ", async () => {
      const formGeneratorUpdated = await thisService.findByIdAndUpdate(
        formGeneratorCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
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
    it("should delete a formGenerator", async () => {
      const formGeneratorDeleted = await thisService.remove(formGeneratorCreated._id);
      assert.strictEqual(formGeneratorDeleted._id.toString(), formGeneratorCreated._id.toString());
    });
  });
});