const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("phrases service", () => {
  let thisService;
  let phraseCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("phrases");

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
    assert.ok(thisService, "Registered the service (phrases)");
  });

  describe("#create", () => {
    const options = {"title":"new value","description":"new value","tagline":"new value","visible":true};

    beforeEach(async () => {
      phraseCreated = await thisService.create({...options, ...users});
    });

    it("should create a new phrase", () => {
      assert.strictEqual(phraseCreated.title, options.title);
assert.strictEqual(phraseCreated.description, options.description);
assert.strictEqual(phraseCreated.tagline, options.tagline);
assert.strictEqual(phraseCreated.visible, options.visible);
    });
  });

  describe("#get", () => {
    it("should retrieve a phrase by ID", async () => {
      const retrieved = await thisService.findById(phraseCreated._id);
      assert.strictEqual(retrieved._id.toString(), phraseCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","description":"updated value","tagline":"updated value","visible":false};

    it("should update an existing phrase ", async () => {
      const phraseUpdated = await thisService.findByIdAndUpdate(
        phraseCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(phraseUpdated.title, options.title);
assert.strictEqual(phraseUpdated.description, options.description);
assert.strictEqual(phraseUpdated.tagline, options.tagline);
assert.strictEqual(phraseUpdated.visible, options.visible);
    });
  });

  describe("#delete", () => {
    it("should delete a phrase", async () => {
      const phraseDeleted = await thisService.remove(phraseCreated._id);
      assert.strictEqual(phraseDeleted._id.toString(), phraseCreated._id.toString());
    });
  });
});