import Link from 'next/link';
import { MainNav } from './MainNav';
import s from '@/styles/components/global/Footer.module.css';

export const Footer = () => {
	return (
		<footer className={s.main}>
			<section className={`${s['main-cont']} display-limit`}>
				<div className={s.main_logo}>
					<Link href={'/'}>Juanvcas_</Link>
				</div>
				<MainNav style={s.main_nav} />
				{/* <Redes /> */}
			</section>
			<span className='separator'></span>
			<section className={`${s['main-cont']} display-limit`}>
				<p>
					Hecho por: <b>Juan Vasquez</b>
				</p>
			</section>
		</footer>
	);
};
