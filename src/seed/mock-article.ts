import { faker } from '@faker-js/faker';
export function generateArticle(num: Number, categoryLists: Array<string>): Array<{
    id: string,
    title: string,
    slug: string,
    category: string,
    short: string,
    long: string,
    date: string,
}> {
    const res = [];
    for (let i = 0;i<num;i++) {
        const random = Math.floor(Math.random() * (2) + 4);
        const title = faker.lorem.words(random);
        const slug = title.split(' ').join('-').toLowerCase();
        const d:{
            id: string,
            title: string,
            slug: string,
            category: string,
            short: string,
            long: string,
            date: string,
        } = {
            id: faker.datatype.uuid(),
            title,
            slug,
            category: faker.helpers.arrayElement(categoryLists),
            long: faker.lorem.paragraphs(random, '\n'),
            short: faker.lorem.paragraph(),
            date: String(faker.date.past()),
        }
        res.push(d);
    }
    return res;
}