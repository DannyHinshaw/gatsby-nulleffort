import React from "react";
import { FaGithub, FaLinkedin, FaSlack, FaTwitter } from "react-icons/fa";
// @ts-ignore
import "./styles.scss";


const Current = (): JSX.Element => (
	<div className="panel grey-bg current">
		<h2>Current</h2>

		<h3 style={{ marginTop: "2rem" }}>
			Work
		</h3>
		<div className="center-text">
			<p>
				Senior Developer at 52inc.
				We work with companies large and small to get up and running with the applications they need.
				Check us out!
			</p>
		</div>
		<div>
			<a
				href="https://52inc.com/"
				rel="noreferrer noopener"
				target="_blank"
				title="52inc"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123 56" className="logo" height="1.75rem">
					<path
						fill="#333"
						fillRule="evenodd"
						d="M111.88 24.7c0-3.5 1.22-5.44 3.4-5.44 1.45 0 2.48 1.03 3.42 2.33l4.03-3.43c-2.01-3.16-4.9-4.1-7.73-4.16-4.74.05-9.75 3.17-10 10.98.25 6.86 3.96 10.45 9.88 10.45 3.11 0 5.6-.9 7.41-2.32l-2.32-4.46c-1.62 1.14-2.76 1.58-4.15 1.58-2.64 0-3.94-2.02-3.94-5.53zm-21.1-7.88l-.4-1.82H84.6l.4 3.7V35h7V22.06c0-1.7.87-2.96 2.48-2.96 1.54 0 1.52 1.26 1.52 3.08V35h7V21.04c-.15-4.82-2.6-6.99-6.47-7.04a6.95 6.95 0 0 0-5.76 2.82zM78.5 5.5c-2.16 0-3.5 1.45-3.5 3.25 0 1.88 1.34 3.25 3.5 3.25 2.08 0 3.5-1.37 3.5-3.25 0-1.8-1.42-3.25-3.5-3.25zM75 35h7V15h-7v20zM50.84 6.47c-5.52 0-11.79 2.87-17.76 9.29l7.03 7.4c4.23-4.07 8.01-6.19 10.8-6.19 3.63 0 4.71 2.2 4.77 4.23.06 2.07-1.51 4.69-1.51 4.69s-4.29 7.26-21.34 29.43l.23.68H67V45H54c9.22-13.26 9-12.84 9.99-14.5 1.96-3.4 2.95-6.73 3.01-9.75-.06-9.6-7.32-14.28-16.16-14.28zM16 17.98L16 11h16V0H4v28h13.28c4.38.19 6.64 3.36 6.64 6.6 0 3.33-2.34 6.58-6.57 6.58-2.42 0-5.9-1.36-9.07-5.29L.5 42.85c4.08 5.21 9.75 8.91 16.78 9.15C31.7 51.76 35.26 40.43 35 34.91c.26-6.8-3.22-16.93-17.72-16.93h-1.29z"
					/>
				</svg>
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
		<div className="center-text">
			<p>
				Let's write Golang and save the world.
			</p>
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
				href="https://twitter.com/nullEffort"
				rel="noreferrer noopener"
				target="_blank"
				title="Twitter"
			>
				<FaTwitter className="social" />
			</a>
			<a
				href="http://columbiasc.tech/"
				rel="noreferrer noopener"
				target="_blank"
				title="ColumbiaSC-Tech Slack"
			>
				<FaSlack className="social" />
			</a>
		</div>
	</div>
);

export default Current;
