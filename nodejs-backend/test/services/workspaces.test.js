const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("workspaces service", () => {
  let thisService;
  let workspaceCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("workspaces");

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
    assert.ok(thisService, "Registered the service (workspaces)");
  });

  describe("#create", () => {
    const options = {"name":"new value","ownerId":"new value","isdefault":"new value"};

    beforeEach(async () => {
      workspaceCreated = await thisService.create({...options, ...users});
    });

    it("should create a new workspace", () => {
      assert.strictEqual(workspaceCreated.name, options.name);
assert.strictEqual(workspaceCreated.ownerId, options.ownerId);
assert.strictEqual(workspaceCreated.isdefault, options.isdefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a workspace by ID", async () => {
      const retrieved = await thisService.findById(workspaceCreated._id);
      assert.strictEqual(retrieved._id.toString(), workspaceCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"name":"updated value","ownerId":"updated value","isdefault":"updated value"};

    it("should update an existing workspace ", async () => {
      const workspaceUpdated = await thisService.findByIdAndUpdate(
        workspaceCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(workspaceUpdated.name, options.name);
assert.strictEqual(workspaceUpdated.ownerId, options.ownerId);
assert.strictEqual(workspaceUpdated.isdefault, options.isdefault);
    });
  });

  describe("#delete", () => {
    it("should delete a workspace", async () => {
      const workspaceDeleted = await thisService.remove(workspaceCreated._id);
      assert.strictEqual(workspaceDeleted._id.toString(), workspaceCreated._id.toString());
    });
  });
});