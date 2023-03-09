import { useContext } from 'react';
import Head from 'next/head';
import { AppContext } from '@/context/AppContext';
import { Header } from '@/components/global/Header';
import { Footer } from '@/components/global/Footer';
import { ProjectModal } from '@/components/modals/ProjectModal';

const MainTemplate = ({ children }) => {
	const { projectModal, setProjecModal } = useContext(AppContext);
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
				{projectModal && <ProjectModal />}
			</>
		</>
	);
};

export default MainTemplate;
