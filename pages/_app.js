import React from 'react';
import '../styles/home.scss'

function MyApp({ Component, pageProps }) {
  const [hydrated, setHydrated] = React.useState(false);
	React.useEffect(() => {
		// This forces a rerender, so the date is rendered
		// the second time but not the first
		setHydrated(true);
	}, []);
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null;
	}
  return <Component {...pageProps} />
}

export default MyApp
