import { MainNav } from './MainNav';
import { FiMenu } from 'react-icons/fi';
import s from '@/styles/components/global/Header.module.css';

export const Header = () => {
	return (
		<header className={s.main}>
			<section className={`${s['main-cont']} display-limit`}>
				<div className={s.main_logo}>
					<p>Juanvcas_</p>
				</div>
				<MainNav style={s.main_nav} />
				<menu className={s.main_menu}>
					<FiMenu />
				</menu>
			</section>
		</header>
	);
};
