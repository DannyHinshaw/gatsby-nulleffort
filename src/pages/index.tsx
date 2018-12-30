import React from "react";
import Current from "../components/Current";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import SEO from "../components/SEO";
import Tech from "../components/Tech";
import "./Index.scss";

const IndexPage = (): JSX.Element => {
	return (
		<>
			<SEO />
			<Heading />
			<main>
				<Current />
				<Tech />
				<Footer/>
			</main>
		</>
	);
};

export default IndexPage;
