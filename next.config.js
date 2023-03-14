/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	// i18n: {
	// 	defaultLocale: 'es',
	// 	locales: ['es', 'en'],
	// },
	images: {
		domains: ['i.postimg.cc', 'picsum.photos'],
	},
};

module.exports = nextConfig;
