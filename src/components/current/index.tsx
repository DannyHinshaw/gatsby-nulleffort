import React from "react";
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";
// @ts-ignore
import ArraySVG from "./array.inline.svg";
// @ts-ignore
import "./styles.scss";


const Current = (): JSX.Element => (
	<div className="panel grey-bg current" id="current">
		<h2>Current</h2>

		<h3 style={{ marginTop: "2rem" }}>
			Work
		</h3>
		<div className="center-text">
			<p>
				Senior Go Engineer @ Array
				<br />
				Building highly scalable services and API's for a FinTech SAAS product with Go, Docker, Kubernetes, and Google
				Cloud.
			</p>
		</div>
		<div>
			<a
				href="https://array.com/"
				rel="noreferrer noopener"
				target="_blank"
				title="Array"
			>
				<ArraySVG />
			</a>
		</div>

		{/*<h3 style={{ marginTop: "5rem" }}>*/}
		{/*	Projects*/}
		{/*</h3>*/}
		{/*<div className="center-text">*/}
		{/*	<Link to="/whittle">*/}
		{/*		<img src={WhittleLogo} alt="Whittle Logo" height="100px" id="WhittleLogo" />*/}
		{/*	</Link>*/}
		{/*</div>*/}

		<h3 style={{ marginTop: "3rem" }}>
			Focus
		</h3>
		<div className="center-text" style={{ textAlign: "left" }}>
			<ul>
				<li>As a Go engineer, I strive for quality, clarity, and testability in my code.</li>
				<li>On a higher level, my passion is for software architecture and design for highly scalable backend services.
				</li>
				<li>On an even <i>higher</i> level, I have an innate desire, a calling, to work on something that has a positive
					impact on our world.
				</li>
			</ul>
		</div>

		<h3 style={{ marginTop: "3rem" }}>
			Social
		</h3>
		<div className="center-text">
			<p>
				You can find me doin' things in these places:
			</p>
		</div>

		<div id="socialLinks">
			<a
				href="https://github.com/DannyHinshaw"
				rel="noreferrer noopener"
				target="_blank"
				title="Github"
			>
				<FaGithub className="social" />
			</a>
			<a
				href="https://www.linkedin.com/in/daniel-hinshaw/"
				rel="noreferrer noopener"
				target="_blank"
				title="Linkedin"
			>
				<FaLinkedin className="social" />
			</a>
			<a
				href="https://gophers.slack.com/"
				rel="noreferrer noopener"
				target="_blank"
				title="Gophers Slack"
			>
				<FaSlack className="social" />
			</a>
			{/*<a*/}
			{/*	href="https://twitter.com/nullEffort"*/}
			{/*	rel="noreferrer noopener"*/}
			{/*	target="_blank"*/}
			{/*	title="Twitter"*/}
			{/*>*/}
			{/*	<FaTwitter className="social" />*/}
			{/*</a>*/}
		</div>
	</div>
);

export default Current;
