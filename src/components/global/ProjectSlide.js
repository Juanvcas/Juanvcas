import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import s from '@/styles/components/global/ProjectSlide.module.css';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export const ProjectSlide = ({ project }) => {
	const { setProjectModal, setProjectModalValue } = useContext(AppContext);

	const setModal = () => {
		setProjectModalValue(project);
		setProjectModal(true);
	};

	return (
		<div className={s.main}>
			<div className={s['image-cont']} onClick={setModal}>
				<span
					className={s['cont-background']}
					style={{ backgroundImage: `url(${project.images[0]})` }}
				></span>
				<figure className={s.main_image}>
					<Image src={project.images[0]} alt={project.title} fill />
				</figure>
			</div>
			<div className={s.main_desc}>
				<div className={s['desc-cont']}>
					<h3>
						{project.title}
						<span>{project.category.title}</span>
					</h3>
					<p>{project.short_description}</p>
				</div>
				<FiArrowUpRight onClick={setModal} />
			</div>
		</div>
	);
};
