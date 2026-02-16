const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("blogs service", () => {
  let thisService;
  let blogCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("blogs");

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
    assert.ok(thisService, "Registered the service (blogs)");
  });

  describe("#create", () => {
    const options = {"title":"new value","postedOn":23,"description":"new value","image1":"new value","image2":"new value"};

    beforeEach(async () => {
      blogCreated = await thisService.create({...options, ...users});
    });

    it("should create a new blog", () => {
      assert.strictEqual(blogCreated.title, options.title);
assert.strictEqual(blogCreated.postedOn, options.postedOn);
assert.strictEqual(blogCreated.description, options.description);
assert.strictEqual(blogCreated.image1, options.image1);
assert.strictEqual(blogCreated.image2, options.image2);
    });
  });

  describe("#get", () => {
    it("should retrieve a blog by ID", async () => {
      const retrieved = await thisService.findById(blogCreated._id);
      assert.strictEqual(retrieved._id.toString(), blogCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"title":"updated value","postedOn":100,"description":"updated value","image1":"updated value","image2":"updated value"};

    it("should update an existing blog ", async () => {
      const blogUpdated = await thisService.findByIdAndUpdate(
        blogCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(blogUpdated.title, options.title);
assert.strictEqual(blogUpdated.postedOn, options.postedOn);
assert.strictEqual(blogUpdated.description, options.description);
assert.strictEqual(blogUpdated.image1, options.image1);
assert.strictEqual(blogUpdated.image2, options.image2);
    });
  });

  describe("#delete", () => {
    it("should delete a blog", async () => {
      const blogDeleted = await thisService.remove(blogCreated._id);
      assert.strictEqual(blogDeleted._id.toString(), blogCreated._id.toString());
    });
  });
});