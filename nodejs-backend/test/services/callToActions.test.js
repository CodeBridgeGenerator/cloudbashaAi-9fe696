const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("callToActions service", () => {
  let thisService;
  let callToActionCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("callToActions");

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
    assert.ok(thisService, "Registered the service (callToActions)");
  });

  describe("#create", () => {
    const options = {"heading":"new value","subHeading":"new value","button":"new value"};

    beforeEach(async () => {
      callToActionCreated = await thisService.create({...options, ...users});
    });

    it("should create a new callToAction", () => {
      assert.strictEqual(callToActionCreated.heading, options.heading);
assert.strictEqual(callToActionCreated.subHeading, options.subHeading);
assert.strictEqual(callToActionCreated.button, options.button);
    });
  });

  describe("#get", () => {
    it("should retrieve a callToAction by ID", async () => {
      const retrieved = await thisService.findById(callToActionCreated._id);
      assert.strictEqual(retrieved._id.toString(), callToActionCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"heading":"updated value","subHeading":"updated value","button":"updated value"};

    it("should update an existing callToAction ", async () => {
      const callToActionUpdated = await thisService.findByIdAndUpdate(
        callToActionCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(callToActionUpdated.heading, options.heading);
assert.strictEqual(callToActionUpdated.subHeading, options.subHeading);
assert.strictEqual(callToActionUpdated.button, options.button);
    });
  });

  describe("#delete", () => {
    it("should delete a callToAction", async () => {
      const callToActionDeleted = await thisService.remove(callToActionCreated._id);
      assert.strictEqual(callToActionDeleted._id.toString(), callToActionCreated._id.toString());
    });
  });
});