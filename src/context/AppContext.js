import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [projectModal, setProjectModal] = useState(false);
	const [projectModalValue, setProjectModalValue] = useState({});
	return (
		<AppContext.Provider
			value={{
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
