import React from "react";
// @ts-ignore
import WhittleLogo from "../../assets/whittle-logo.png";
// @ts-ignore
import WhittleGif from "../../assets/whittle.gif";
import "./styles.scss";


const WhittlePage = (): JSX.Element => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<img src={WhittleLogo} alt="Whittle Logo" />
			</div>

			<div id="description">
				<p>
					Hide properties on Zillow! With Whittle you can create and manage a list of properties to hide.
					Sites like Zillow only want us to use their "Favorite" system, but sometimes it's useful to clear
					out homes that you would never purchase (even with a gun to your head) from clogging your search
					feed and maps.
				</p>
				<p>
					Whittle provides what is basically a reverse of the "Favorite" system, whereby you can block properties
					from showing up in any of your searches instead. Allowing you to essentially <strong>whittle</strong>
					down your searches instead of building them up.
				</p>
			</div>

			<div id="demo">
				<h3>
					See it in action!
				</h3>
				<div id="demoGif">
					<img src={WhittleGif} alt="Whittle Gif Demo" height="500px" />
				</div>
			</div>

			<div id="links">
				<h4>
					Coming soon to FireFox and Chrome!
				</h4>
			</div>
		</>
	);
};

export default WhittlePage;
