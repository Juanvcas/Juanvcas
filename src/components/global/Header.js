import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '@/context/AppContext';
import { useTranslation } from 'react-i18next';
import { MainNav } from './MainNav';
import { FiMenu } from 'react-icons/fi';
import { SlGlobe } from 'react-icons/sl';
import s from '@/styles/components/global/Header.module.css';

export const Header = () => {
	const { lang, setLang } = useContext(AppContext);

	const [nav, setNav] = useState(true);
	const [button, setButton] = useState(false);

	const { i18n } = useTranslation();

	const changeLanguage = (i18n) => {
		if (i18n.language === 'es') {
			i18n.changeLanguage('en');
			window.localStorage.setItem('P-JV_LANG', 'en');
			setLang('en');
		} else {
			i18n.changeLanguage('es');
			window.localStorage.setItem('P-JV_LANG', 'es');
			setLang('es');
		}
	};

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
				<div className={s['nav-cont']}>
					{nav && <MainNav style={s.main_nav} />}
					{button && (
						<menu className={s.main_menu} onClick={handlerNav}>
							<FiMenu />
						</menu>
					)}
					<div className={s.main_lang} onClick={() => changeLanguage(i18n)}>
						<SlGlobe />
						{lang && lang.toUpperCase()}
					</div>
				</div>
			</section>
		</header>
	);
};
