const assert = require("assert");
const app = require("../../src/app");

describe("workspaces service", () => {
  let thisService;
  let workspaceCreated;

  beforeEach(async () => {
    thisService = await app.service("workspaces");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (workspaces)");
  });

  describe("#create", () => {
    const options = {"name":"new value","ownerId":"new value","isdefault":"new value"};

    beforeEach(async () => {
      workspaceCreated = await thisService.create(options);
    });

    it("should create a new workspace", () => {
      assert.strictEqual(workspaceCreated.name, options.name);
assert.strictEqual(workspaceCreated.ownerId, options.ownerId);
assert.strictEqual(workspaceCreated.isdefault, options.isdefault);
    });
  });

  describe("#get", () => {
    it("should retrieve a workspace by ID", async () => {
      const retrieved = await thisService.get(workspaceCreated._id);
      assert.strictEqual(retrieved._id, workspaceCreated._id);
    });
  });

  describe("#update", () => {
    let workspaceUpdated;
    const options = {"name":"updated value","ownerId":"updated value","isdefault":"updated value"};

    beforeEach(async () => {
      workspaceUpdated = await thisService.update(workspaceCreated._id, options);
    });

    it("should update an existing workspace ", async () => {
      assert.strictEqual(workspaceUpdated.name, options.name);
assert.strictEqual(workspaceUpdated.ownerId, options.ownerId);
assert.strictEqual(workspaceUpdated.isdefault, options.isdefault);
    });
  });

  describe("#delete", () => {
  let workspaceDeleted;
    beforeEach(async () => {
      workspaceDeleted = await thisService.remove(workspaceCreated._id);
    });

    it("should delete a workspace", async () => {
      assert.strictEqual(workspaceDeleted._id, workspaceCreated._id);
    });
  });
});