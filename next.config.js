/** @type {import('next').NextConfig} */
const API_KEY = process.env.API_KEY;
const nextConfig = {
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/old/:path*",
				destination: "/new/:path*",
				permanent: false,
			},
		];
	},
	async rewrites() {
		return [
			{
				source: "/api/movies",
				destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-Ko&page=1`,
			},
		];
	},
};

module.exports = nextConfig;
