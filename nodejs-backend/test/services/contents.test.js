const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("contents service", () => {
  let thisService;
  let contentCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("contents");

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
    assert.ok(thisService, "Registered the service (contents)");
  });

  describe("#create", () => {
    const options = {"step":23,"title":"new value","description":"new value"};

    beforeEach(async () => {
      contentCreated = await thisService.create({...options, ...users});
    });

    it("should create a new content", () => {
      assert.strictEqual(contentCreated.step, options.step);
assert.strictEqual(contentCreated.title, options.title);
assert.strictEqual(contentCreated.description, options.description);
    });
  });

  describe("#get", () => {
    it("should retrieve a content by ID", async () => {
      const retrieved = await thisService.findById(contentCreated._id);
      assert.strictEqual(retrieved._id.toString(), contentCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"step":100,"title":"updated value","description":"updated value"};

    it("should update an existing content ", async () => {
      const contentUpdated = await thisService.findByIdAndUpdate(
        contentCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(contentUpdated.step, options.step);
assert.strictEqual(contentUpdated.title, options.title);
assert.strictEqual(contentUpdated.description, options.description);
    });
  });

  describe("#delete", () => {
    it("should delete a content", async () => {
      const contentDeleted = await thisService.remove(contentCreated._id);
      assert.strictEqual(contentDeleted._id.toString(), contentCreated._id.toString());
    });
  });
});