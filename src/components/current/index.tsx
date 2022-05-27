import React from "react";
import { FaGithub, FaLinkedin, FaSlack } from "react-icons/fa";
// @ts-ignore
import OpenlySVG from "./openly.inline.svg";
// @ts-ignore
import "./styles.scss";


const Current = (): JSX.Element => (
	<div className="panel grey-bg current" id="current">
		<h2>Current</h2>

		<h3 style={{ marginTop: "2rem" }}>
			Work
		</h3>
		<div className="center-text">
			<h4 style={{ marginBottom: ".75rem" }}>Senior Backend SWE @ Openly</h4>
			<p>
				Building out the backend for homeowners InsurTech with services in Go and GCP.
			</p>
		</div>
		<div className="work-logo">
			<a
				href="https://openly.com/"
				rel="noreferrer noopener"
				target="_blank"
				title="Openly"
			>
				<OpenlySVG />
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
				<li>I love solving technical problems with code that is clear, tested, and secure.</li>
				<li>On a higher level, my passion is for intuitive API's, architecture, and design for highly scalable,
					distributed systems.
				</li>
				<li>On an even <i>higher</i> level, I have an innate desire, a calling, to work on projects that have a positive
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
