
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
position: faker.lorem.sentence(""),
category: faker.lorem.sentence(""),
location: faker.lorem.sentence(""),
employmentType: faker.lorem.sentence(""),
jobDescription: faker.lorem.sentence(""),
requirements: faker.lorem.sentence("8"),
aboutTheTeam: faker.lorem.sentence(""),
salaryRange: faker.lorem.sentence(""),
experienceLevel: faker.lorem.sentence(""),
applicationDeadline: faker.lorem.sentence(""),
isActive: faker.lorem.sentence(""),
responsibilites: faker.lorem.sentence(""),
applicationLink: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
