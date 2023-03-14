import Link from 'next/link';
import { MainNav } from './MainNav';
import s from '@/styles/components/global/Footer.module.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
	const { t } = useTranslation('footer');
	return (
		<footer className={s.main}>
			<section className={`${s['main-cont']} display-limit`}>
				<div className={s.main_logo}>
					<Link href={'/'}>Juanvcas_</Link>
				</div>
				<MainNav style={s.main_nav} />
			</section>
			<span className='separator'></span>
			<section className={`${s['main-cont']} display-limit`}>
				<p>
					{t('footer')}: <b>Juan Vasquez</b>
				</p>
			</section>
		</footer>
	);
};
