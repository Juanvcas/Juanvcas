import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';
import Head from 'next/head';

const MainTemplate = ({ children }) => {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<>
				<Header />
				{children}
				<Footer />
			</>
		</>
	);
};

export default MainTemplate;
