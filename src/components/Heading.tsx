import React from "react";
import { imageExtension } from "../utils/client";

const profileImageURL: string = "https://res.cloudinary.com/nulleffort/image/upload/c_scale,w_540/v1653645947/nulleffort/self/river-square";
const headshotLarge: string = profileImageURL.concat(imageExtension);

const Heading = (): JSX.Element => (
	<div className="heading-container">
		<h1>Danny Hinshaw</h1>
		<br />
		<p style={{ fontSize: "x-large" }}>Senior Software Engineer</p>
		<br />
		<img
			className="avatar"
			src={headshotLarge}
			alt="Danny headshot"
		/>
	</div>
);

export default Heading;
