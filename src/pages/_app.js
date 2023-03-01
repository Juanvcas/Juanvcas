import MainTemplate from '@/templates';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
	return (
		<MainTemplate>
			<Component {...pageProps} />
		</MainTemplate>
	);
}
