const config = require("./config/website");

module.exports = {
	siteMetadata: {
		name: "Danny Hinshaw - Portfolio",
		tagline: "Full Stack Developer",
		siteUrl: "https://nulleffort.com"
	},
	plugins: [
		{
			resolve: "gatsby-plugin-typography",
			options: {
				pathToConfigModule: "config/typography.js"
			}
		},
		"gatsby-plugin-sass",
		"gatsby-plugin-typescript",
		"gatsby-plugin-tslint",
		"gatsby-plugin-offline",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: config.siteTitle,
				short_name: config.siteTitleAlt,
				description: config.siteDescription,
				start_url: config.pathPrefix,
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: "standalone",
				icon: "static/favicons/favicon.png", // This path is relative to the root of the site.
				icons: [
					{
						src: "/favicons/android-chrome-192x192.png",
						sizes: "192x192",
						type: "image/png"
					},
					{
						src: "/favicons/android-chrome-512x512.png",
						sizes: "512x512",
						type: "image/png"
					},
					{
						src: "/favicons/apple-touch-icon.png",
						sizes: "152x152",
						type: "image/png"
					},
					{
						src: "/favicons/favicon-16x16.png",
						sizes: "16x16",
						type: "image/png"
					},
					{
						src: "/favicons/favicon-32x32.png",
						sizes: "32x32",
						type: "image/png"
					},
					{
						src: "/favicons/mstile-150x150.png",
						sizes: "150x150",
						type: "image/png"
					}
				]
			}
		},
		{
			resolve: "gatsby-plugin-netlify",
			options: {
				headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
				allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
				mergeSecurityHeaders: true, // boolean to turn off the default security headers
				mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
				mergeCachingHeaders: true, // boolean to turn off the default caching headers
				generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
			}
		}
	]
};
