import { v4 as uuid } from 'uuid';
import { categories } from './categories.data';
import { technologies } from './technologies.data';

const projects = [
	{
		id: uuid(),
		title: 'Magenta Accesories',
		description:
			'This page is an ecommerce/digital catalog that was created for a small accessories and jewelry company that wanted to start small but with enough information for their customers to find what they need.',
		short_description: 'Digital catalog of a small accessories company.',
		images: [
			'https://i.postimg.cc/26ZRBvYd/jewelry-shop-desktop.png',
			'https://i.postimg.cc/yNWzstrb/jewelry-shop-mobile.png',
		],
		category: categories[1],
		tags: ['ecommerce', 'shop', 'catalog', 'payments'],
		technologies: [technologies[0], technologies[2]],
		repository: {
			hosting: 'GitHub',
			url: 'https://github.com/Juanvcas/jewelry-shop-page',
		},
		date: new Date('2023-03-20'),
		production: {
			url: 'https://juanvcas.com',
		},
	},
	{
		id: uuid(),
		title: 'Todo App',
		description:
			'This is a task creation application (To-Do Machine) that was created as a practice project, but it is still very comprehensive.',
		short_description: 'Todo app project with React.js',
		images: ['https://picsum.photos/600/400'],
		category: categories[2],
		tags: ['application', 'practice'],
		technologies: [technologies[0], technologies[1]],
		repository: {
			hosting: 'GitHub',
			url: 'https://github.com/Juanvcas/todo-app_platzi',
		},
		date: new Date('2023-02-20'),
		production: null,
	},
	{
		id: uuid(),
		title: 'Faker API',
		description:
			'This is a fake REST API created as a practice project that simulates an ecommerce, providing products with all the information required for their functionality.',
		short_description: 'REST API fake that simulate an ecoomerce',
		images: ['https://picsum.photos/600/400'],
		category: categories[0],
		tags: ['application', 'api', 'rest api'],
		technologies: [technologies[0], technologies[4]],
		repository: {
			hosting: 'GitHub',
			url: 'https://github.com/Juanvcas/api-rest-with-express',
		},
		date: new Date('2023-02-20'),
		production: null,
	},
	{
		id: uuid(),
		title: 'Yard sale store',
		description:
			'This is a fake online store project that was created as a practice exercise in Platzi.',
		short_description: 'Online store project Yard sale store',
		images: ['https://picsum.photos/600/400'],
		category: categories[1],
		tags: ['ecommerce', 'store', 'online store'],
		technologies: [technologies[0], technologies[2]],
		repository: {
			hosting: 'GitHub',
			url: 'https://github.com/Juanvcas/Next-practice_react-shop',
		},
		date: new Date('2023-02-20'),
		production: null,
	},
];

export { projects };
