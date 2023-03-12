import Head from 'next/head';
import Image from 'next/image';
import { Filters } from '@/components/pages/Portfolio/Filters';
import s from '@/styles/Portfolio.module.css';
import { ProjectsList } from '@/components/global/ProjectsList';

export default function Portfolio() {
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
						<h1>Proyectos web</h1>
						<p>
							Aquí puedes encontrar mis proyectos mas recientes de todo tipo.
						</p>
					</div>
					<div className={s.banner_image}>
						<figure>
							<Image
								src={
									'https://i.postimg.cc/kX9ptNQx/3b95d8c378005109e60f93b00a244f59.gif'
								}
								alt={'proyectos'}
								fill
							/>
						</figure>
					</div>
				</section>
				<span className={'separator2'}></span>
				{/* <section className={`${s.main_filters} display-limit`}>
					<Filters s={s} />
				</section> */}
				<section className={`${s.main_projects} display-limit`}>
					<ProjectsList style={s.projects_list} />
				</section>
			</main>
		</>
	);
}
