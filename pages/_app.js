import '../styles/globals.css';
import analytics from '../util/analytics';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export function reportWebVitals({ id, name, label, value }) {
  analytics.track(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default MyApp;
