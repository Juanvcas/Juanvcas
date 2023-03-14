import Head from 'next/head';
import { ContactForm } from '@/components/pages/Contact/ContactForm';
import s from '@/styles/Contact.module.css';
import { useTranslation } from 'react-i18next';

export default function Contact() {
	const { t } = useTranslation('contact');
	return (
		<>
			<Head>
				<title>Contácto</title>
				<meta
					name='description'
					content='Contáctame a travez del formario si tienes algun proyecto en mente o si quieres hablar conmigo'
				/>
			</Head>
			<main className={s.main}>
				<section className={`${s.main_banner} display-limit`}>
					<div className={s.banner_title}>
						<h1>{t('title')}</h1>
						<h3>{t('titleText')}</h3>
					</div>
				</section>
				<span className={'separator2'}></span>
				<section className={s.main_form}>
					<div className={`${s['form-cont']} display-limit`}>
						<ContactForm s={s} />
					</div>
				</section>
			</main>
		</>
	);
}
