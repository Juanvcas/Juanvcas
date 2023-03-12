import Head from 'next/head';
import Image from 'next/image';
import { MainLinkButton } from '@/components/common/Buttons';
import { TechSlider } from '@/components/pages/Home/TechSlider';
import { ServiceSlide } from '@/components/pages/Home/ServiceSlide';
import { ProjectsList } from '@/components/global/ProjectsList';
import { SlChemistry, SlRocket, SlWrench } from 'react-icons/sl';
import s from '@/styles/Home.module.css';
import { Subtitle } from '@/components/global/Subtitle';

export default function Home() {
	return (
		<>
			<Head>
				<title>Juan Vasquez | Full Stack Developer</title>
				<meta
					name='description'
					content='Juan Vasquez - Full Stack developer especializado en creación de aplicaciones web con React.js y Next.js'
				/>
			</Head>
			<main className={s.main}>
				<section className={`${s.main_hero} display-limit`}>
					<div className={s.hero_title}>
						<h1>
							Hola, soy <br />
							<strong>Juan Vasquez</strong>
						</h1>
						<h2>FULL STACK DEVELOPER</h2>
						<h3>
							Especializado en creación de aplicaciones web, e-commerce,
							dashboards y soluciones empresariales con <b>React.js</b> y{' '}
							<b>Next.js</b>
						</h3>
						<MainLinkButton
							href={'/contact'}
							title={'Contácto'}
							text={'Contáctame'}
						/>
					</div>
					<div className={s.hero_image}>
						<figure className={s['image-cont']}>
							<Image
								src={
									'https://i.postimg.cc/4N0S35g7/image-processing20210907-21865-1u2lhif.gif'
								}
								alt={'image gift'}
								fill
							/>
						</figure>
					</div>
				</section>
				<section className={s.main_services}>
					<div className={`${s.services_tech} display-limit`}>
						<Subtitle style={s.tech_title} text={'TECNOLOGÍAS'} />
						<TechSlider />
					</div>
					<span className={'separator'}></span>
					<div className={`${s.services_title} display-limit`}>
						<h2>
							<span>LOS SERVICIOS QUE OFRESCO</span>
						</h2>
						<p>
							<span>
								Creación de aplicaciones web SPA para soluciones empresariales,
								diseño, desarrollo e implementación utilizando tecnologías top
								de la industria, e-commerce, dashboards, porfatolios de marca
								personal o empresarial
							</span>
						</p>
					</div>
					<div className={`${s.services_slider} display-limit`}>
						<ServiceSlide
							style={s.service_slide}
							title={'DISEÑO'}
							image={<SlChemistry />}
							text={
								'Diseño y estructuración de aplicaciones web enfocadas a la solución del cliente'
							}
						/>
						<ServiceSlide
							style={s.service_slide}
							title={'DESARROLLO'}
							image={<SlRocket />}
							text={
								'Desarrollo de la aplicación siempre enfocado a dar el mejor rendimiento'
							}
						/>
						<ServiceSlide
							style={s.service_slide}
							title={'MANTENIMIENTO'}
							image={<SlWrench />}
							text={
								'Mantenimiento y actualización de contenido, API, bases de datos y servicios'
							}
						/>
					</div>
				</section>
				<section className={`${s.main_projects} display-limit`}>
					<div className={s['projects_title-cont']}>
						<Subtitle style={s.projects_title} text={'MIS PROYECTOS'} />
						<p>Aquí puedes encontrar los ultimos proyectos que realicé</p>
					</div>
					<ProjectsList style={s.projects_list} limit={3} />
					<MainLinkButton
						href={'/portfolio'}
						title={'Proyectos'}
						text={'Ver Todos'}
					/>
				</section>
				<span className={'separator2'}></span>
				<section className={`${s.main_contact} display-limit`}>
					<div className={s.contact}>
						<div className={s.contact_title}>
							<h2>CONTÁCTAME</h2>
						</div>
						<div className={s.contact_text}>
							<p>
								Puedes escribirme y para responder totas tus dudas y conocer
								mejor mi oferta.
							</p>
							<MainLinkButton
								href={'/contact'}
								title={'Contácto'}
								text={'Contáctame'}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
