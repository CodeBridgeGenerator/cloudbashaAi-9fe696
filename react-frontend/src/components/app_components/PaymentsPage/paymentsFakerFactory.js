
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
paymentStatus: faker.lorem.sentence(1),
paymentIntentId: faker.lorem.sentence(1),
sessionId: faker.lorem.sentence(1),
amount: faker.lorem.sentence(1),
currency: faker.lorem.sentence(1),
paidAt: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
