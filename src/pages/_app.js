import '@src/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Tabletop Taverns</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
