const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("emailSubscriptions service", () => {
  let thisService;
  let emailSubscriptionCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("emailSubscriptions");

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
    assert.ok(thisService, "Registered the service (emailSubscriptions)");
  });

  describe("#create", () => {
    const options = {"email":"new value","subscribed":true,"token":"new value","source":"new value","unsubscribedAt":1771223256242,"subscribedAt":1771223256242,"lastChangedAt":1771223256242};

    beforeEach(async () => {
      emailSubscriptionCreated = await thisService.create({...options, ...users});
    });

    it("should create a new emailSubscription", () => {
      assert.strictEqual(emailSubscriptionCreated.email, options.email);
assert.strictEqual(emailSubscriptionCreated.subscribed, options.subscribed);
assert.strictEqual(emailSubscriptionCreated.token, options.token);
assert.strictEqual(emailSubscriptionCreated.source, options.source);
assert.strictEqual(emailSubscriptionCreated.unsubscribedAt, options.unsubscribedAt);
assert.strictEqual(emailSubscriptionCreated.subscribedAt, options.subscribedAt);
assert.strictEqual(emailSubscriptionCreated.lastChangedAt, options.lastChangedAt);
    });
  });

  describe("#get", () => {
    it("should retrieve a emailSubscription by ID", async () => {
      const retrieved = await thisService.findById(emailSubscriptionCreated._id);
      assert.strictEqual(retrieved._id.toString(), emailSubscriptionCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"email":"updated value","subscribed":false,"token":"updated value","source":"updated value","unsubscribedAt":null,"subscribedAt":null,"lastChangedAt":null};

    it("should update an existing emailSubscription ", async () => {
      const emailSubscriptionUpdated = await thisService.findByIdAndUpdate(
        emailSubscriptionCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(emailSubscriptionUpdated.email, options.email);
assert.strictEqual(emailSubscriptionUpdated.subscribed, options.subscribed);
assert.strictEqual(emailSubscriptionUpdated.token, options.token);
assert.strictEqual(emailSubscriptionUpdated.source, options.source);
assert.strictEqual(emailSubscriptionUpdated.unsubscribedAt, options.unsubscribedAt);
assert.strictEqual(emailSubscriptionUpdated.subscribedAt, options.subscribedAt);
assert.strictEqual(emailSubscriptionUpdated.lastChangedAt, options.lastChangedAt);
    });
  });

  describe("#delete", () => {
    it("should delete a emailSubscription", async () => {
      const emailSubscriptionDeleted = await thisService.remove(emailSubscriptionCreated._id);
      assert.strictEqual(emailSubscriptionDeleted._id.toString(), emailSubscriptionCreated._id.toString());
    });
  });
});