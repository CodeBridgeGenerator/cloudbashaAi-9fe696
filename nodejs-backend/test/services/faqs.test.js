const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("faqs service", () => {
  let thisService;
  let faqCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("faqs");

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
    assert.ok(thisService, "Registered the service (faqs)");
  });

  describe("#create", () => {
    const options = {"questions":"new value","answers":"new value"};

    beforeEach(async () => {
      faqCreated = await thisService.create({...options, ...users});
    });

    it("should create a new faq", () => {
      assert.strictEqual(faqCreated.questions, options.questions);
assert.strictEqual(faqCreated.answers, options.answers);
    });
  });

  describe("#get", () => {
    it("should retrieve a faq by ID", async () => {
      const retrieved = await thisService.findById(faqCreated._id);
      assert.strictEqual(retrieved._id.toString(), faqCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"questions":"updated value","answers":"updated value"};

    it("should update an existing faq ", async () => {
      const faqUpdated = await thisService.findByIdAndUpdate(
        faqCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(faqUpdated.questions, options.questions);
assert.strictEqual(faqUpdated.answers, options.answers);
    });
  });

  describe("#delete", () => {
    it("should delete a faq", async () => {
      const faqDeleted = await thisService.remove(faqCreated._id);
      assert.strictEqual(faqDeleted._id.toString(), faqCreated._id.toString());
    });
  });
});