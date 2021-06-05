import React from "react";
import Helmet from "react-helmet";
import config from "../../config/website";

const googleTrackingId = "UA-89874328-1";

const SEO = (): JSX.Element => {
	const title = config.siteTitle;
	const description = config.siteDescription;
	const realPrefix = config.pathPrefix === "/" ? "" : config.pathPrefix;
	const image = config.siteUrl + realPrefix + config.siteLogo;
	const blogURL = config.siteUrl + config.pathPrefix;
	const schemaOrgJSONLD = [
		{
			"@context": "http://schema.org",
			"@type": "WebSite",
			url: blogURL,
			name: title,
			alternateName: config.siteTitleAlt ? config.siteTitleAlt : "",
		},
	];
	return (
		<Helmet>
			<html lang={config.siteLanguage} />
			<title>{title}</title>
			<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="shortcut icon" href="favicon.ico" />
			<meta name="msapplication-TileColor" content={config.backgroundColor} />
			<meta name="msapplication-config" content="browserconfig.xml" />
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={config.userTwitter ? config.userTwitter : ""} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<script async={true} src={`https://www.googletagmanager.com/gtag/js?id=${googleTrackingId}`} />
			<script>
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', "${googleTrackingId}");
			`}
			</script>
		</Helmet>
	);
};

export default SEO;
