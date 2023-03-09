import { useEffect, useState } from 'react';
import { useFetch } from '@/hooks/useFectch';
import { ProjectSlide } from './ProjectSlide';

export const ProjectsList = ({ style, limit }) => {
	const [projects, setProjects] = useState([]);

	if (limit) {
		useFetch(
			`${process.env.NEXT_PUBLIC_API}/projects/limit/${limit}`,
			setProjects
		);
	} else {
		useFetch(`${process.env.NEXT_PUBLIC_API}/projects`, setProjects);
	}

	return (
		<div className={style}>
			{projects.map((project) => (
				<ProjectSlide key={project.id} project={project} />
			))}
		</div>
	);
};
