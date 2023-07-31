import { faker } from "@faker-js/faker";


export const skills = [
    {
        skill: 'JavaScript',
        percentage: 90,
    },
    {
        skill: 'TypeScript',
        percentage: 20,
    },
    {
        skill: 'Java',
        percentage: 55,
    },
    {
        skill: 'Node.js',
        percentage: 70,
    },
    {
        skill: 'React',
        percentage: 30,
    },
    {
        skill: 'Angular',
        percentage: 40,
    },
];


export const experiences = [
    {
        title: 'Software Developer at Microsoft',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        from: 2000,
        to: 2003
    },
    {
        title: 'Backend Developer at Google',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        from: 2000,
        to: 2003
    },
    {
        title: 'Frontend Developer at Github',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        from: 2000,
        to: 2003
    },
    {
        title: 'DevOps at Amazon',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        from: 2000
    },
];

export const projects = [
    {
        name: 'Awesome website 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        image: 'https://github.com/fazt/next-simple-portfolio/blob/main/public/portfolio1.jpeg?raw=true'
    },
    {
        name: 'Awesome website 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        image: 'https://github.com/fazt/next-simple-portfolio/blob/main/public/portfolio2.jpg?raw=true'
    },
    {
        name: 'Awesome website 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        image: 'https://github.com/fazt/next-simple-portfolio/blob/main/public/portfolio3.png?raw=true'
    },
    {
        name: 'Awesome website 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate deleniti voluptates tempora deserunt ipsum unde inventore obcaecati quisquam consequatur fuga!',
        image: 'https://github.com/fazt/next-simple-portfolio/blob/main/public/portfolio4.png?raw=true'
    },
];

export const posts = [
    {
        title: 'React',
        content: faker.lorem.paragraph(2),
        imageUrl: faker.image.url()
    },
    {
        title: 'Astro',
        content: faker.lorem.paragraph(2),
        imageUrl: faker.image.url()
    },
    {
        title: 'Angular',
        content: faker.lorem.paragraph(2),
        imageUrl: faker.image.url()
    }
];