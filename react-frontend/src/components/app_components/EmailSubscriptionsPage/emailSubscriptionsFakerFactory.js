
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
email: faker.date.past(""),
subscribed: faker.date.past(""),
token: faker.date.past(""),
source: faker.date.past(""),
unsubscribedAt: faker.date.past(""),
subscribedAt: faker.date.past(""),
lastChangedAt: faker.date.past(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
