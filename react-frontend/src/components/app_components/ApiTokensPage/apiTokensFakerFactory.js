
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
company: faker.lorem.sentence(1),
apiKey: faker.lorem.sentence(1),
apiSecret: faker.lorem.sentence(1),
accessToken: faker.lorem.sentence(1),
createdDate: faker.lorem.sentence(1),
expiryDate: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
environment: faker.lorem.sentence(1),
notes: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
