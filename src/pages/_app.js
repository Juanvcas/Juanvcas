import { AppProvider } from '@/context/AppContext';
import MainTemplate from '@/templates';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<AppProvider>
			<MainTemplate>
				<Component {...pageProps} />
			</MainTemplate>
		</AppProvider>
	);
}
