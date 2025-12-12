const assert = require("assert");
const app = require("../../src/app");

describe("payments service", () => {
  let thisService;
  let paymentCreated;

  beforeEach(async () => {
    thisService = await app.service("payments");
  });

  it("registered the service", () => {
    assert.ok(thisService, "Registered the service (payments)");
  });

  describe("#create", () => {
    const options = {"paymentStatus":"new value","paymentIntentId":"new value","sessionId":"new value","amount":23,"currency":"new value","paidAt":"new value","status":"new value"};

    beforeEach(async () => {
      paymentCreated = await thisService.create(options);
    });

    it("should create a new payment", () => {
      assert.strictEqual(paymentCreated.paymentStatus, options.paymentStatus);
assert.strictEqual(paymentCreated.paymentIntentId, options.paymentIntentId);
assert.strictEqual(paymentCreated.sessionId, options.sessionId);
assert.strictEqual(paymentCreated.amount, options.amount);
assert.strictEqual(paymentCreated.currency, options.currency);
assert.strictEqual(paymentCreated.paidAt, options.paidAt);
assert.strictEqual(paymentCreated.status, options.status);
    });
  });

  describe("#get", () => {
    it("should retrieve a payment by ID", async () => {
      const retrieved = await thisService.get(paymentCreated._id);
      assert.strictEqual(retrieved._id, paymentCreated._id);
    });
  });

  describe("#update", () => {
    let paymentUpdated;
    const options = {"paymentStatus":"updated value","paymentIntentId":"updated value","sessionId":"updated value","amount":100,"currency":"updated value","paidAt":"updated value","status":"updated value"};

    beforeEach(async () => {
      paymentUpdated = await thisService.update(paymentCreated._id, options);
    });

    it("should update an existing payment ", async () => {
      assert.strictEqual(paymentUpdated.paymentStatus, options.paymentStatus);
assert.strictEqual(paymentUpdated.paymentIntentId, options.paymentIntentId);
assert.strictEqual(paymentUpdated.sessionId, options.sessionId);
assert.strictEqual(paymentUpdated.amount, options.amount);
assert.strictEqual(paymentUpdated.currency, options.currency);
assert.strictEqual(paymentUpdated.paidAt, options.paidAt);
assert.strictEqual(paymentUpdated.status, options.status);
    });
  });

  describe("#delete", () => {
  let paymentDeleted;
    beforeEach(async () => {
      paymentDeleted = await thisService.remove(paymentCreated._id);
    });

    it("should delete a payment", async () => {
      assert.strictEqual(paymentDeleted._id, paymentCreated._id);
    });
  });
});