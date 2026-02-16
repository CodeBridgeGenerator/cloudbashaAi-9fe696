
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
path: faker.lorem.sentence(""),
image1: faker.lorem.sentence(""),
image2: faker.lorem.sentence(""),
category: faker.lorem.sentence(""),
headerContent: faker.lorem.sentence(""),
bodyContent: faker.lorem.sentence(""),
disclaimer: faker.lorem.sentence(""),
visible: faker.lorem.sentence(""),
bodyList: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
