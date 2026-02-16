const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("featureRequests service", () => {
  let thisService;
  let featureRequestCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("featureRequests");

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
    assert.ok(thisService, "Registered the service (featureRequests)");
  });

  describe("#create", () => {
    const options = {"title":"new value","content":"new value","likes":23,"reply":"new value","status":"new value","date":1771223256210,"author":"new value"};

    beforeEach(async () => {
      featureRequestCreated = await thisService.create({...options, ...users});
    });

    it("should create a new featureRequest", () => {
      assert.strictEqual(featureRequestCreated.title, options.title);
assert.strictEqual(featureRequestCreated.content, options.content);
assert.strictEqual(featureRequestCreated.likes, options.likes);
assert.strictEqual(featureRequestCreated.reply, options.reply);
assert.strictEqual(featureRequestCreated.status, options.status);
assert.strictEqual(featureRequestCreated.date, options.date);
assert.strictEqual(featureRequestCreated.author, options.author);
    });
  });

  describe("#get", () => {
    it("should retrieve a featureRequest by ID", async () => {
      const retrieved = await thisService.findById(featureRequestCreated._id);
      assert.strictEqual(retrieved._id.toString(), featureRequestCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","content":"updated value","likes":100,"reply":"updated value","status":"updated value","date":null,"author":"updated value"};

    it("should update an existing featureRequest ", async () => {
      const featureRequestUpdated = await thisService.findByIdAndUpdate(
        featureRequestCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(featureRequestUpdated.title, options.title);
assert.strictEqual(featureRequestUpdated.content, options.content);
assert.strictEqual(featureRequestUpdated.likes, options.likes);
assert.strictEqual(featureRequestUpdated.reply, options.reply);
assert.strictEqual(featureRequestUpdated.status, options.status);
assert.strictEqual(featureRequestUpdated.date, options.date);
assert.strictEqual(featureRequestUpdated.author, options.author);
    });
  });

  describe("#delete", () => {
    it("should delete a featureRequest", async () => {
      const featureRequestDeleted = await thisService.remove(featureRequestCreated._id);
      assert.strictEqual(featureRequestDeleted._id.toString(), featureRequestCreated._id.toString());
    });
  });
});