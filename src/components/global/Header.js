import Link from 'next/link';
import { MainNav } from './MainNav';
import { FiMenu } from 'react-icons/fi';
import s from '@/styles/components/global/Header.module.css';
import { useEffect, useState } from 'react';

export const Header = () => {
	const [nav, setNav] = useState(true);
	const [button, setButton] = useState(false);

	const handlerNav = (e) => {
		setNav(!nav);
		e.stopPropagation();
	};

	useEffect(() => {
		if (window.innerWidth > 768) {
			setButton(false);
			setNav(true);
		} else {
			setButton(true);
			setNav(false);
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 768) {
				setButton(false);
				setNav(true);
			} else {
				setButton(true);
				setNav(false);
			}
		});

		document.body.addEventListener('click', () => {
			if (window.innerWidth <= 768) {
				setNav(false);
			}
		});
	}, []);
	return (
		<header className={s.main}>
			<section className={`${s['main-cont']} display-limit`}>
				<div className={s.main_logo}>
					<Link href={'/'}>Juanvcas_</Link>
				</div>
				{nav && <MainNav style={s.main_nav} />}
				{button && (
					<menu className={s.main_menu} onClick={handlerNav}>
						<FiMenu />
					</menu>
				)}
			</section>
		</header>
	);
};
