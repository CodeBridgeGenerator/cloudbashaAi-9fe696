const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("headers service", () => {
  let thisService;
  let headerCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("headers");

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
    assert.ok(thisService, "Registered the service (headers)");
  });

  describe("#create", () => {
    const options = {"icon":"new value","featureName":"new value","description":"new value"};

    beforeEach(async () => {
      headerCreated = await thisService.create({...options, ...users});
    });

    it("should create a new header", () => {
      assert.strictEqual(headerCreated.icon, options.icon);
assert.strictEqual(headerCreated.featureName, options.featureName);
assert.strictEqual(headerCreated.description, options.description);
    });
  });

  describe("#get", () => {
    it("should retrieve a header by ID", async () => {
      const retrieved = await thisService.findById(headerCreated._id);
      assert.strictEqual(retrieved._id.toString(), headerCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"icon":"updated value","featureName":"updated value","description":"updated value"};

    it("should update an existing header ", async () => {
      const headerUpdated = await thisService.findByIdAndUpdate(
        headerCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(headerUpdated.icon, options.icon);
assert.strictEqual(headerUpdated.featureName, options.featureName);
assert.strictEqual(headerUpdated.description, options.description);
    });
  });

  describe("#delete", () => {
    it("should delete a header", async () => {
      const headerDeleted = await thisService.remove(headerCreated._id);
      assert.strictEqual(headerDeleted._id.toString(), headerCreated._id.toString());
    });
  });
});