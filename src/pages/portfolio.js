import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { AppContext } from '@/context/AppContext';
import { useContext } from 'react';
import { Filters } from '@/components/pages/Portfolio/Filters';
import { ProjectsList } from '@/components/global/ProjectsList';
import { ProjectSlide } from '@/components/global/ProjectSlide';
import s from '@/styles/Portfolio.module.css';

export default function Portfolio() {
	const { t } = useTranslation('portfolio');
	const { projects } = useContext(AppContext);
	return (
		<>
			<Head>
				<title>Portafolio de desarrollo</title>
				<meta
					name='description'
					content='Aquí puedes encontrar todos los proyectos de este portafolio.'
				/>
			</Head>
			<main className={s.main}>
				<section className={`${s.main_banner} display-limit`}>
					<div className={s.banner_title}>
						<h1>{t('title')}</h1>
						<p>{t('titleText')}</p>
					</div>
				</section>
				<span className={'separator2'}></span>
				{/* <section className={`${s.main_filters} display-limit`}>
					<Filters s={s} />
				</section> */}
				<section className={`${s.main_projects} display-limit`}>
					<ProjectsList style={s.projects_list}>
						{projects.map((project) => (
							<ProjectSlide key={project.id} project={project} />
						))}
					</ProjectsList>
				</section>
			</main>
		</>
	);
}
