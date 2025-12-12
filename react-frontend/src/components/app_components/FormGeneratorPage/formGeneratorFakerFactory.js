
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
goal: faker.lorem.sentence(1),
status: faker.lorem.sentence(1),
formResponses: faker.lorem.sentence(1),
dashboardData: faker.lorem.sentence(1),
rawGeminiResponse: faker.lorem.sentence(1),
generationError: faker.lorem.sentence(1),
user: faker.lorem.sentence(1),
isPublic: faker.lorem.sentence(1),
publicUrl: faker.lorem.sentence(1),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
