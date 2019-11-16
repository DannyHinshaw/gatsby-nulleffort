import React from "react";
// @ts-ignore
import FirefoxIcon from "../../assets/icon-firefox-300x310.png";
// @ts-ignore
import WhittleLogo from "../../assets/whittle-logo.png";
// @ts-ignore
import WhittleGif from "../../assets/whittle.gif";
import "./styles.scss";


const WhittlePage = (): JSX.Element => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<img src={WhittleLogo} id="whittleLogo" alt="Whittle Logo" />
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
					from showing up in any of your searches instead. Allowing you to essentially <i>whittle</i> down
					your searches instead of building them up.
				</p>
			</div>

			<div id="links">
				<h4>
					<p>Get it for FireFox!</p>
					<a href="https://addons.mozilla.org/en-US/firefox/addon/whittle/" target="_blank">
						<img src={FirefoxIcon} alt="Firefox Icon" height="100px" />
					</a>
				</h4>

				<br />

				<h4>
					Coming soon to Chrome!
				</h4>
			</div>

			<div id="demo">
				<h3>
					See it in action!
				</h3>
				<div id="demoGif">
					<img src={WhittleGif} alt="Whittle Gif Demo" />
				</div>
			</div>

			<footer>
				<h5 style={{ textAlign: "center" }}>
					Hide/Show Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a
					href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
					<br />
					PocketKnife Icon made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good
					Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</h5>
			</footer>
		</>
	);
};

export default WhittlePage;
