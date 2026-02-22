export const prerender = true;

const BASE_URL = 'https://andriytyurnikov.me';

const pages = [
	'/',
	'/about',
	'/friends',
	'/garage',
	'/garage/ergonomic-typography',
	'/garage/glowing-ice',
	'/garage/mobile-first-layouts',
	'/garage/no-more-top-hamburger',
	'/garage/fov-map',
	'/garage/mobile-first-layouts/cover',
	'/garage/mobile-first-layouts/responsive-navbar',
	'/garage/mobile-first-layouts/portrait-feed',
	'/garage/mobile-first-layouts/long-side-thirds',
	'/ergonomic-web'
];

/** @type {import('./$types').RequestHandler} */
export function GET() {
	const urls = pages
		.map(
			(page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
  </url>`
		)
		.join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
