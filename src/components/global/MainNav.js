import Link from 'next/link';
import { DiGithubBadge } from 'react-icons/di';

export const MainNav = ({ style }) => {
	return (
		<nav className={style}>
			<ul>
				<li>
					<Link href={'/portfolio'}>Portafolio</Link>
				</li>
				<li>
					<Link href={'/'}>CV</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contácto</Link>
				</li>
				<li>
					<Link href={'https://github.com/Juanvcas'} target={'_blank'}>
						<DiGithubBadge />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
