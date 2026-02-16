const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("bonus service", () => {
  let thisService;
  let bonusCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("bonus");

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
    assert.ok(thisService, "Registered the service (bonus)");
  });

  describe("#create", () => {
    const options = {"slide":23,"sectionName":"new value"};

    beforeEach(async () => {
      bonusCreated = await thisService.create({...options, ...users});
    });

    it("should create a new bonus", () => {
      assert.strictEqual(bonusCreated.slide, options.slide);
assert.strictEqual(bonusCreated.sectionName, options.sectionName);
    });
  });

  describe("#get", () => {
    it("should retrieve a bonus by ID", async () => {
      const retrieved = await thisService.findById(bonusCreated._id);
      assert.strictEqual(retrieved._id.toString(), bonusCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"slide":100,"sectionName":"updated value"};

    it("should update an existing bonus ", async () => {
      const bonusUpdated = await thisService.findByIdAndUpdate(
        bonusCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(bonusUpdated.slide, options.slide);
assert.strictEqual(bonusUpdated.sectionName, options.sectionName);
    });
  });

  describe("#delete", () => {
    it("should delete a bonus", async () => {
      const bonusDeleted = await thisService.remove(bonusCreated._id);
      assert.strictEqual(bonusDeleted._id.toString(), bonusCreated._id.toString());
    });
  });
});