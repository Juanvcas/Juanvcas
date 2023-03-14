import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const MainNav = ({ style }) => {
	const { t } = useTranslation('header');
	return (
		<nav className={style}>
			<ul>
				<li>
					<Link href={'/portfolio'}>{t('portfolio')}</Link>
				</li>
				<li>
					<Link href={'/contact'}>{t('contact')}</Link>
				</li>
				<li>
					<Link href={'https://github.com/Juanvcas'} target={'_blank'}>
						<SiGithub />
					</Link>
				</li>
				<li>
					<Link
						href={'https://www.linkedin.com/in/juan-vasquez-8002411b1/'}
						target={'_blank'}
					>
						<SiLinkedin />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
