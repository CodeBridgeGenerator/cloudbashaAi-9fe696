
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
title: faker.lorem.sentence(""),
content: faker.lorem.sentence(""),
likes: faker.lorem.sentence(""),
reply: faker.lorem.sentence(""),
status: faker.lorem.sentence(""),
date: faker.lorem.sentence(""),
author: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
