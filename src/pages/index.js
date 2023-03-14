import Head from 'next/head';
import Image from 'next/image';
import { ni18nConfig } from 'ni18n.config';
import { useTranslation } from 'react-i18next';
import { loadTranslations, clientNamespaces } from 'ni18n';
import { MainLinkButton } from '@/components/common/Buttons';
import { TechSlider } from '@/components/pages/Home/TechSlider';
import { ServiceSlide } from '@/components/pages/Home/ServiceSlide';
import { ProjectsList } from '@/components/global/ProjectsList';
import { ProjectSlide } from '@/components/global/ProjectSlide';
import { SlChemistry, SlRocket, SlWrench } from 'react-icons/sl';
import s from '@/styles/Home.module.css';
import { Subtitle } from '@/components/global/Subtitle';
import { useContext } from 'react';
import { AppContext } from '@/context/AppContext';

export default function Home() {
	const { t } = useTranslation('home');
	const { projects } = useContext(AppContext);
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
							{t('heroTitle')} <br />
							<strong>Juan Vasquez</strong>
						</h1>
						<h2>FULL STACK DEVELOPER</h2>
						<h3>{t('heroText')}</h3>
						<MainLinkButton
							href={'/contact'}
							title={t('contactButtonTitle')}
							text={t('contactButton')}
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
						<Subtitle style={s.tech_title} text={t('techTitle')} />
						<TechSlider />
					</div>
					<span className={'separator'}></span>
					<div className={`${s.services_title} display-limit`}>
						<h2>
							<span>{t('servicesTitle')}</span>
						</h2>
						<p>
							<span>{t('servicesText')}</span>
						</p>
					</div>
					<div className={`${s.services_slider} display-limit`}>
						<ServiceSlide
							style={s.service_slide}
							title={t('slideTitle1')}
							image={<SlChemistry />}
							text={t('slideText1')}
						/>
						<ServiceSlide
							style={s.service_slide}
							title={t('slideTitle2')}
							image={<SlRocket />}
							text={t('slideText2')}
						/>
						<ServiceSlide
							style={s.service_slide}
							title={t('slideTitle3')}
							image={<SlWrench />}
							text={t('slideText3')}
						/>
					</div>
				</section>
				<section className={`${s.main_projects} display-limit`}>
					<div className={s['projects_title-cont']}>
						<Subtitle style={s.projects_title} text={t('projectsTitle')} />
						<p>{t('projectsText')}</p>
					</div>
					<ProjectsList style={s.projects_list}>
						{projects.slice(0, 3).map((project) => (
							<ProjectSlide key={project.id} project={project} />
						))}
					</ProjectsList>
					<MainLinkButton
						href={'/portfolio'}
						title={t('projectsButtonTitle')}
						text={t('projectsButton')}
					/>
				</section>
				<span className={'separator2'}></span>
				<section className={`${s.main_contact} display-limit`}>
					<div className={s.contact}>
						<div className={s.contact_title}>
							<h2>{t('contactTitle')}</h2>
						</div>
						<div className={s.contact_text}>
							<p>{t('contactText')}</p>
							<MainLinkButton
								href={'/contact'}
								title={t('contactButtonTitle')}
								text={t('contactButton')}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

export const getStaticProps = async (props) => {
	return {
		props: {
			...(await loadTranslations(ni18nConfig, props.locale)),
			...clientNamespaces(['home']),
		},
	};
};
