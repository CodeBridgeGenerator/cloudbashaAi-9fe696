const assert = require("assert");
const app = require("../../src/app");

describe("contactSubmissions service", () => {
  let thisService;
  let contactSubmissionCreated;

  beforeEach(async () => {
    thisService = await app.service("contactSubmissions");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (contactSubmissions)");
  });

  describe("#create", () => {
    const options = {"name":"new value","contactNo":23,"email":"new value","companyName":"new value","position":"new value","message":"new value","user":"new value","paymentStatus":"new value","paymentIntentId":"new value","sessionId":"new value","amount":23,"currency":"new value","paidAt":"new value","status":"new value"};

    beforeEach(async () => {
      contactSubmissionCreated = await thisService.create(options);
    });

    it("should create a new contactSubmission", () => {
      assert.strictEqual(contactSubmissionCreated.name, options.name);
assert.strictEqual(contactSubmissionCreated.contactNo, options.contactNo);
assert.strictEqual(contactSubmissionCreated.email, options.email);
assert.strictEqual(contactSubmissionCreated.companyName, options.companyName);
assert.strictEqual(contactSubmissionCreated.position, options.position);
assert.strictEqual(contactSubmissionCreated.message, options.message);
assert.strictEqual(contactSubmissionCreated.user, options.user);
assert.strictEqual(contactSubmissionCreated.paymentStatus, options.paymentStatus);
assert.strictEqual(contactSubmissionCreated.paymentIntentId, options.paymentIntentId);
assert.strictEqual(contactSubmissionCreated.sessionId, options.sessionId);
assert.strictEqual(contactSubmissionCreated.amount, options.amount);
assert.strictEqual(contactSubmissionCreated.currency, options.currency);
assert.strictEqual(contactSubmissionCreated.paidAt, options.paidAt);
assert.strictEqual(contactSubmissionCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a contactSubmission by ID", async () => {
      const retrieved = await thisService.get(contactSubmissionCreated._id);
      assert.strictEqual(retrieved._id, contactSubmissionCreated._id);
    });
  });

  describe("#update", () => {
    let contactSubmissionUpdated;
    const options = {"name":"updated value","contactNo":100,"email":"updated value","companyName":"updated value","position":"updated value","message":"updated value","user":"updated value","paymentStatus":"updated value","paymentIntentId":"updated value","sessionId":"updated value","amount":100,"currency":"updated value","paidAt":"updated value","status":"updated value"};

    beforeEach(async () => {
      contactSubmissionUpdated = await thisService.update(contactSubmissionCreated._id, options);
    });

    it("should update an existing contactSubmission ", async () => {
      assert.strictEqual(contactSubmissionUpdated.name, options.name);
assert.strictEqual(contactSubmissionUpdated.contactNo, options.contactNo);
assert.strictEqual(contactSubmissionUpdated.email, options.email);
assert.strictEqual(contactSubmissionUpdated.companyName, options.companyName);
assert.strictEqual(contactSubmissionUpdated.position, options.position);
assert.strictEqual(contactSubmissionUpdated.message, options.message);
assert.strictEqual(contactSubmissionUpdated.user, options.user);
assert.strictEqual(contactSubmissionUpdated.paymentStatus, options.paymentStatus);
assert.strictEqual(contactSubmissionUpdated.paymentIntentId, options.paymentIntentId);
assert.strictEqual(contactSubmissionUpdated.sessionId, options.sessionId);
assert.strictEqual(contactSubmissionUpdated.amount, options.amount);
assert.strictEqual(contactSubmissionUpdated.currency, options.currency);
assert.strictEqual(contactSubmissionUpdated.paidAt, options.paidAt);
assert.strictEqual(contactSubmissionUpdated.status, options.status);
    });
  });

  describe("#delete", () => {
  let contactSubmissionDeleted;
    beforeEach(async () => {
      contactSubmissionDeleted = await thisService.remove(contactSubmissionCreated._id);
    });

    it("should delete a contactSubmission", async () => {
      assert.strictEqual(contactSubmissionDeleted._id, contactSubmissionCreated._id);
    });
  });
});