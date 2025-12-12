const assert = require("assert");
const app = require("../../src/app");

describe("faqs service", () => {
  let thisService;
  let faqCreated;

  beforeEach(async () => {
    thisService = await app.service("faqs");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (faqs)");
  });

  describe("#create", () => {
    const options = {"questions":"new value","answers":"new value"};

    beforeEach(async () => {
      faqCreated = await thisService.create(options);
    });

    it("should create a new faq", () => {
      assert.strictEqual(faqCreated.questions, options.questions);
assert.strictEqual(faqCreated.answers, options.answers);
    });
  });

  describe("#get", () => {
    it("should retrieve a faq by ID", async () => {
      const retrieved = await thisService.get(faqCreated._id);
      assert.strictEqual(retrieved._id, faqCreated._id);
    });
  });

  describe("#update", () => {
    let faqUpdated;
    const options = {"questions":"updated value","answers":"updated value"};

    beforeEach(async () => {
      faqUpdated = await thisService.update(faqCreated._id, options);
    });

    it("should update an existing faq ", async () => {
      assert.strictEqual(faqUpdated.questions, options.questions);
assert.strictEqual(faqUpdated.answers, options.answers);
    });
  });

  describe("#delete", () => {
  let faqDeleted;
    beforeEach(async () => {
      faqDeleted = await thisService.remove(faqCreated._id);
    });

    it("should delete a faq", async () => {
      assert.strictEqual(faqDeleted._id, faqCreated._id);
    });
  });
});