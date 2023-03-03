import { ProjectSlide } from './ProjectSlide';

const temporalList = [
	{
		title: 'Magenta Accesorios',
		description: 'Tienda onlide de una pequeña empresa de accesorios',
		category: 'E-commerce',
		image: 'https://picsum.photos/600/600',
	},
	{
		title: 'Magenta Accesorios',
		description: 'Tienda onlide de una pequeña empresa de accesorios',
		category: 'E-commerce',
		image: 'https://picsum.photos/600/600',
	},
	{
		title: 'Magenta Accesorios',
		description: 'Tienda onlide de una pequeña empresa de accesorios',
		category: 'E-commerce',
		image: 'https://picsum.photos/600/600',
	},
];

export const ProjectsList = ({ list, style }) => {
	return (
		<div className={style}>
			{temporalList.map((project) => (
				<ProjectSlide
					title={project.title}
					description={project.description}
					category={project.category}
					image={project.image}
				/>
			))}
		</div>
	);
};
