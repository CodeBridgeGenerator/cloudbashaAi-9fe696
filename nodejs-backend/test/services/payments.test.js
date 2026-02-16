const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("payments service", () => {
  let thisService;
  let paymentCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("payments");

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
    assert.ok(thisService, "Registered the service (payments)");
  });

  describe("#create", () => {
    const options = {"paymentStatus":"new value","paymentIntentId":"new value","sessionId":"new value","amount":23,"currency":"new value","paidAt":"new value","status":"new value"};

    beforeEach(async () => {
      paymentCreated = await thisService.create({...options, ...users});
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
      const retrieved = await thisService.findById(paymentCreated._id);
      assert.strictEqual(retrieved._id.toString(), paymentCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"paymentStatus":"updated value","paymentIntentId":"updated value","sessionId":"updated value","amount":100,"currency":"updated value","paidAt":"updated value","status":"updated value"};

    it("should update an existing payment ", async () => {
      const paymentUpdated = await thisService.findByIdAndUpdate(
        paymentCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
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
    it("should delete a payment", async () => {
      const paymentDeleted = await thisService.remove(paymentCreated._id);
      assert.strictEqual(paymentDeleted._id.toString(), paymentCreated._id.toString());
    });
  });
});