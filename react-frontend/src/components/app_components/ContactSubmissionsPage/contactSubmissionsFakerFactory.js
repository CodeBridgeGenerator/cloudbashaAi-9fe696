
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
name: faker.lorem.sentence(""),
contactNo: faker.lorem.sentence(""),
email: faker.lorem.sentence(""),
companyName: faker.lorem.sentence(""),
position: faker.lorem.sentence(""),
message: faker.lorem.sentence(""),
user: faker.lorem.sentence(""),
paymentStatus: faker.lorem.sentence(""),
paymentIntentId: faker.lorem.sentence(""),
sessionId: faker.lorem.sentence(""),
amount: faker.lorem.sentence(""),
currency: faker.lorem.sentence(""),
paidAt: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
