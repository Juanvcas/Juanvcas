import Head from 'next/head';
import Image from 'next/image';
import { MainLinkButton } from '@/components/common/Buttons';
import s from '@/styles/Home.module.css';

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
							dashboards e ideas de negocio con <b>React.js</b> y <b>Next.js</b>
						</h3>
						<MainLinkButton
							href={'/'}
							title={'Contácto'}
							text={'Contáctame'}
							target={'_self'}
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
				<section className={s.main_services}></section>
			</main>
		</>
	);
}
