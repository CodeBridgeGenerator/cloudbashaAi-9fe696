const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("workspaceMembers service", () => {
  let thisService;
  let workspaceMemberCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("workspaceMembers");

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
    assert.ok(thisService, "Registered the service (workspaceMembers)");
  });

  describe("#create", () => {
    const options = {"workspaceId":"new value","userId":"new value","role":"new value"};

    beforeEach(async () => {
      workspaceMemberCreated = await thisService.create({...options, ...users});
    });

    it("should create a new workspaceMember", () => {
      assert.strictEqual(workspaceMemberCreated.workspaceId, options.workspaceId);
assert.strictEqual(workspaceMemberCreated.userId, options.userId);
assert.strictEqual(workspaceMemberCreated.role, options.role);
    });
  });

  describe("#get", () => {
    it("should retrieve a workspaceMember by ID", async () => {
      const retrieved = await thisService.findById(workspaceMemberCreated._id);
      assert.strictEqual(retrieved._id.toString(), workspaceMemberCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"workspaceId":"updated value","userId":"updated value","role":"updated value"};

    it("should update an existing workspaceMember ", async () => {
      const workspaceMemberUpdated = await thisService.findByIdAndUpdate(
        workspaceMemberCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(workspaceMemberUpdated.workspaceId, options.workspaceId);
assert.strictEqual(workspaceMemberUpdated.userId, options.userId);
assert.strictEqual(workspaceMemberUpdated.role, options.role);
    });
  });

  describe("#delete", () => {
    it("should delete a workspaceMember", async () => {
      const workspaceMemberDeleted = await thisService.remove(workspaceMemberCreated._id);
      assert.strictEqual(workspaceMemberDeleted._id.toString(), workspaceMemberCreated._id.toString());
    });
  });
});