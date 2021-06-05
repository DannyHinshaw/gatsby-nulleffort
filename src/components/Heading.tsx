import React from "react";
import { imageExtension } from "../utils/client";

const profileImageBase: string = "https://res.cloudinary.com/nulleffort/image/upload/v1546188503/nulleffort/self/Danny2017";
const headshotLarge: string = profileImageBase.concat("_2x").concat(imageExtension);

const Heading = (): JSX.Element => (
	<div className="heading-container">
		<h1>Danny Hinshaw</h1>
		<p>Full Stack Developer</p>
		<img
			className="avatar"
			src={headshotLarge}
			alt="Danny headshot"
		/>
	</div>
);

export default Heading;
