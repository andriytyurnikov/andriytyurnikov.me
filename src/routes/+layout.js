export const prerender = true;

import { dev } from '$app/env';
import { injectAnalytics } from '@vercel/analytics/sveltekit-next';

import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit-next';

injectAnalytics({ mode: dev ? 'development' : 'production' });
injectSpeedInsights();
