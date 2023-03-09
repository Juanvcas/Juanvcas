import { v4 as uuid } from 'uuid';
import { categories } from './categories.data';
import { technologies } from './technologies.data';

const projects = [
	{
		id: uuid(),
		title: 'Magenta Accesorios',
		description:
			'Esta página es e-commerce/catálogo digital que fue hecho para una pequeña empresa de accesorios y visuteria que queria empezar por algo pequeño pero con las suficiente información para que sus clientes puedan encontrar lo que deseen.',
		short_description: 'Catálogo digital de una pequeña empresa de accesorios',
		images: [
			'https://i.postimg.cc/26ZRBvYd/jewelry-shop-desktop.png',
			'https://i.postimg.cc/yNWzstrb/jewelry-shop-mobile.png',
		],
		category: categories[1],
		tags: ['e-commerce', 'tienda', 'catalogo', 'pagos'],
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
			'Esta es una aplicación de creación de tareas (To do machine) que fue creada como un proyecto de practica, pero aun asi es muy completa.',
		short_description: 'Proyecto de To do App en React.js',
		images: ['https://picsum.photos/600/400'],
		category: categories[2],
		tags: ['aplicación', 'practica'],
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
			'Esta es una fake API-REST hecha como practica que simula un e-commerce entregrando productos con toda la información que requieren para funcionar.',
		short_description: 'API fake que simula un e-coomerce',
		images: ['https://picsum.photos/600/400'],
		category: categories[0],
		tags: ['aplicación', 'api', 'rest-api'],
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
			'Este es un proyecto de una tienda online falsa que se realizó en Platzi como práctica.',
		short_description: 'Proyecto de tienda online Yard sale store',
		images: ['https://picsum.photos/600/400'],
		category: categories[1],
		tags: ['e-commerce', 'tienda', 'tienda online'],
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
