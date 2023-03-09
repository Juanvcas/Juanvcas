import Image from 'next/image';
import { useContext, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { MainLinkButton } from '../common/Buttons';
import s from '@/styles/components/modals/ProjectModal.module.css';

export const ProjectModal = () => {
	const { setProjectModal, projectModalValue } = useContext(AppContext);
	const [project] = useState(projectModalValue);
	return (
		<aside className={s['main-cont']} onClick={() => setProjectModal(false)}>
			<div className={s.main} onClick={(e) => e.stopPropagation()}>
				<section className={s.main_content}>
					<figure className={s.content_image}>
						<div className={s['image-cont']}>
							{project.images.map((img) => (
								<Image src={img} alt={project.title} fill />
							))}
						</div>
					</figure>
					<div className={s.content_info}>
						<h2>{project.title}</h2>
						<h3>{project.category.title}</h3>
						<p>{project.description}</p>
					</div>
				</section>
				<section className={s.main_info}>
					<h3>Descripción corta:</h3>
					<p>{project.short_description}</p>
					<h3>Tecnoligías:</h3>
					{project.technologies.map((tech) => (
						<p>{tech.title}</p>
					))}
					<h3>Repositorio:</h3>
					<p>Hosting: {project.repository.hosting}</p>
					<MainLinkButton
						href={project.repository.url}
						title={'GitHub'}
						text={'Ir al link'}
						target={'_blank'}
					/>
				</section>
			</div>
		</aside>
	);
};
