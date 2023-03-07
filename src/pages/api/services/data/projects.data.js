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
		images: ['url...', 'url...', 'url...'],
		category: categories[1],
		tags: ['e-commerce', 'tienda', 'catalogo', 'pagos'],
		technologies: [technologies[0], technologies[2]],
		date: new Date('2023-03-20'),
		production: true,
	},
	{
		id: uuid(),
		title: 'Todo App',
		description:
			'Esta es una aplicación de creación de tareas (To do machine) que fue creada como un proyecto de practica, pero aun asi es muy completa.',
		short_description: 'Proyecto de To do App en React.js',
		images: ['url...', 'url...', 'url...'],
		category: categories[2],
		tags: ['aplicación', 'practica'],
		technologies: [technologies[0], technologies[1]],
		date: new Date('2023-02-20'),
		production: false,
	},
	{
		id: uuid(),
		title: 'Faker API',
		description:
			'Esta es una fake API-REST hecha como practica que simula un e-commerce entregrando productos con toda la información que requieren para funcionar.',
		short_description: 'API fake que simula un e-coomerce',
		images: ['url...', 'url...', 'url...'],
		category: categories[0],
		tags: ['aplicación', 'api', 'rest-api'],
		technologies: [technologies[0], technologies[4]],
		date: new Date('2023-02-20'),
		production: false,
	},
	{
		id: uuid(),
		title: 'Yard sale store',
		description:
			'Este es un proyecto de una tienda online falsa que se realizó en Platzi como práctica.',
		short_description: 'Proyecto de tienda online Yard sale store',
		images: ['url...', 'url...', 'url...'],
		category: categories[0],
		tags: ['e-commerce', 'tienda', 'tienda online'],
		technologies: [technologies[0], technologies[2]],
		date: new Date('2023-02-20'),
		production: false,
	},
];

export { projects };
