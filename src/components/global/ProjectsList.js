import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFectch';
import { ProjectSlide } from './ProjectSlide';

export const ProjectsList = ({ list, style }) => {
	const [projects, setProjects] = useState([]);
	useFetch(`${process.env.NEXT_PUBLIC_API}/api/projects`, setProjects);
	useEffect(() => {
		console.log(projects);
	}, [projects]);
	return (
		<div className={style}>
			{projects.map((project) => (
				<ProjectSlide
					key={project.id}
					title={project.title}
					description={project.short_description}
					category={project.category.title}
					images={project.images}
				/>
			))}
		</div>
	);
};
