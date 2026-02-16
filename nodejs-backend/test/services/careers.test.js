const assert = require("assert");
const app = require("../../src/app");

let usersRefData = [
  {
    name: "Standard User",
    email: "standard@example.com",
    password: "password",
  },
];

describe("careers service", () => {
  let thisService;
  let careerCreated;
  let usersServiceResults;
  let users;

  beforeEach(async () => {
    thisService = await app.service("careers");

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
    assert.ok(thisService, "Registered the service (careers)");
  });

  describe("#create", () => {
    const options = {"position":"new value","category":"new value","location":"new value","employmentType":"new value","jobDescription":"new value","requirements":"new value","aboutTheTeam":"new value","salaryRange":"new value","experienceLevel":"new value","applicationDeadline":1771223256223,"isActive":true,"responsibilites":"new value","applicationLink":"new value"};

    beforeEach(async () => {
      careerCreated = await thisService.create({...options, ...users});
    });

    it("should create a new career", () => {
      assert.strictEqual(careerCreated.position, options.position);
assert.strictEqual(careerCreated.category, options.category);
assert.strictEqual(careerCreated.location, options.location);
assert.strictEqual(careerCreated.employmentType, options.employmentType);
assert.strictEqual(careerCreated.jobDescription, options.jobDescription);
assert.strictEqual(careerCreated.requirements, options.requirements);
assert.strictEqual(careerCreated.aboutTheTeam, options.aboutTheTeam);
assert.strictEqual(careerCreated.salaryRange, options.salaryRange);
assert.strictEqual(careerCreated.experienceLevel, options.experienceLevel);
assert.strictEqual(careerCreated.applicationDeadline, options.applicationDeadline);
assert.strictEqual(careerCreated.isActive, options.isActive);
assert.strictEqual(careerCreated.responsibilites, options.responsibilites);
assert.strictEqual(careerCreated.applicationLink, options.applicationLink);
    });
  });

  describe("#get", () => {
    it("should retrieve a career by ID", async () => {
      const retrieved = await thisService.findById(careerCreated._id);
      assert.strictEqual(retrieved._id.toString(), careerCreated._id.toString());
    });
  });

  describe("#update", () => {
    const options = {"position":"updated value","category":"updated value","location":"updated value","employmentType":"updated value","jobDescription":"updated value","requirements":"updated value","aboutTheTeam":"updated value","salaryRange":"updated value","experienceLevel":"updated value","applicationDeadline":null,"isActive":false,"responsibilites":"updated value","applicationLink":"updated value"};

    it("should update an existing career ", async () => {
      const careerUpdated = await thisService.findByIdAndUpdate(
        careerCreated._id, 
        options, 
        { new: true } // Ensure it returns the updated doc
      );
      assert.strictEqual(careerUpdated.position, options.position);
assert.strictEqual(careerUpdated.category, options.category);
assert.strictEqual(careerUpdated.location, options.location);
assert.strictEqual(careerUpdated.employmentType, options.employmentType);
assert.strictEqual(careerUpdated.jobDescription, options.jobDescription);
assert.strictEqual(careerUpdated.requirements, options.requirements);
assert.strictEqual(careerUpdated.aboutTheTeam, options.aboutTheTeam);
assert.strictEqual(careerUpdated.salaryRange, options.salaryRange);
assert.strictEqual(careerUpdated.experienceLevel, options.experienceLevel);
assert.strictEqual(careerUpdated.applicationDeadline, options.applicationDeadline);
assert.strictEqual(careerUpdated.isActive, options.isActive);
assert.strictEqual(careerUpdated.responsibilites, options.responsibilites);
assert.strictEqual(careerUpdated.applicationLink, options.applicationLink);
    });
  });

  describe("#delete", () => {
    it("should delete a career", async () => {
      const careerDeleted = await thisService.remove(careerCreated._id);
      assert.strictEqual(careerDeleted._id.toString(), careerCreated._id.toString());
    });
  });
});