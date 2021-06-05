import React from "react";
// @ts-ignore
import AddNotes from "../../assets/add-notes.png";
// @ts-ignore
import HideProperty from "../../assets/hide-property.png";
// @ts-ignore
import ChromeIcon from "../../assets/icon-chrome-256x256.png";
// @ts-ignore
import FirefoxIcon from "../../assets/icon-firefox-300x310.png";
// @ts-ignore
import PopupControl from "../../assets/popup-control.png";
// @ts-ignore
import RealtorButtons from "../../assets/realtor-buttons.png";
// @ts-ignore
import ToggleHidden from "../../assets/toggle-hidden.png";
// @ts-ignore
import WhittleLogo from "../../assets/whittle-logo.png";
// @ts-ignore
import ZillowButtons from "../../assets/zillow-buttons.png";
import "./styles.scss";


const WhittlePage = (): JSX.Element => {
	return (
		<>
			<div style={{ textAlign: "center" }}>
				<img src={WhittleLogo} id="whittleLogo" alt="Whittle Logo" />

				<h3>
					Hide properties on Zillow and Realtor.com!
				</h3>
			</div>

			<br />

			<div id="description">
				<p>
					With Whittle you can create and manage a list of properties to hide.
					Realty sites only want us to use their "Favorite" system, but sometimes it's useful to clear
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
				<div id="innerLinks">
					<a href="https://chrome.google.com/webstore/detail/whittle/dphcjoabamcdfolmfplcjabhpkobphop" target="_blank">
						<img src={ChromeIcon} alt="Chrome Icon" height="100px" />
						<p>Whittle for Chrome</p>
					</a>
					<a href="" target="_blank">
						<img src={FirefoxIcon} alt="Firefox Icon" height="100px" />
						<p>Whittle for Firefox</p>
					</a>
				</div>
			</div>

			<div id="demo">
				<h3>
					See it in action!
				</h3>

				<img src={PopupControl} className="screen-shot" alt="Popup Control" />
				<img src={RealtorButtons} className="screen-shot" alt="Realtor Buttons" />
				<img src={ZillowButtons} className="screen-shot" alt="Zillow Buttons" />
				<img src={ToggleHidden} className="screen-shot" alt="Toggle Hidden" />
				<img src={AddNotes} className="screen-shot" alt="Add Notes" />
				<img src={HideProperty} className="screen-shot" alt="Hide Properties" />
			</div>

			<footer>
				<h5 style={{ marginTop: 250, textAlign: "center" }}>
					PocketKnife Icon made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good
					Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
				</h5>
			</footer>
		</>
	);
};

export default WhittlePage;
