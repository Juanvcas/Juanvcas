import { appWithI18Next, useSyncLanguage } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';
import { AppProvider } from '@/context/AppContext';
import MainTemplate from '@/templates';
import '@/styles/globals.css';

function App({ Component, pageProps }) {
	const locale =
		typeof window !== 'undefined' && window.localStorage.getItem('P-JV_LANG');
	useSyncLanguage(locale || 'es');
	return (
		<AppProvider>
			<MainTemplate>
				<Component {...pageProps} />
			</MainTemplate>
		</AppProvider>
	);
}

export default appWithI18Next(App, ni18nConfig);
