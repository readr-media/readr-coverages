import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

import '@readr-media/web-components/dist/web-components/web-components.css';
import '../styles/globals.scss';

ReactGA.initialize(process.env.NEXT_PUBLIC_GA_TRACKING_ID, {
  titleCase: false,
});

function MyApp({ Component, pageProps }) {
  useEffect(function mount() {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return <Component {...pageProps} />;
}

MyApp.propTypes = {
  pageProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default MyApp;
