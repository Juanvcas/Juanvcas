import Link from 'next/link';

export const MainNav = ({ style }) => {
	return (
		<nav className={style}>
			<ul>
				<li>
					<Link href={'/'}>Portafolio</Link>
				</li>
				<li>
					<Link href={'/'}>CV</Link>
				</li>
				<li>
					<Link href={'/'}>Contácto</Link>
				</li>
			</ul>
		</nav>
	);
};
