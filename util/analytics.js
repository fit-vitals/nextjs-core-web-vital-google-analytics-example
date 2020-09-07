import Analytics from 'analytics';
import googleAnalyticsPlugin from '@analytics/google-analytics';
import Router from 'next/router';

// Initialize analytics and plugins
// Documentation: https://getanalytics.io
const analytics = Analytics({
  debug: process.env.NODE_ENV === 'production',
  plugins: [
    googleAnalyticsPlugin({
      trackingId: 'UA-73089861-6',
    }),
  ],
});

// Track initial pageview
if (typeof window !== 'undefined') {
  analytics.page();
}

// Track pageview on route change
Router.events.on('routeChangeComplete', (url) => {
  analytics.page();
});

export default analytics;
