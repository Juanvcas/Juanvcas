import { createContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFetch } from '@/hooks/useFectch';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const { i18n } = useTranslation();
	const [lang, setLang] = useState('');

	const [projects, setProjects] = useState([]);

	useFetch(`/api/${lang}/projects`, setProjects, lang);

	const [projectModal, setProjectModal] = useState(false);
	const [projectModalValue, setProjectModalValue] = useState({});

	useEffect(() => {
		const locale = window.localStorage.getItem('P-JV_LANG');
		setLang(locale);
	}, [lang]);

	return (
		<AppContext.Provider
			value={{
				lang,
				setLang,
				projects,
				setProjects,
				projectModal,
				setProjectModal,
				projectModalValue,
				setProjectModalValue,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
