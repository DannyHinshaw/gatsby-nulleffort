import React from "react";

const Footer = (): JSX.Element => (
	<footer className="panel grey-bg">
		<img
			id="mainLogo"
			style={{ borderRadius: "50%", maxWidth: "25vw" }}
			src="https://res.cloudinary.com/nulleffort/image/upload/v1579345784/nulleffort/self/hat-face-baby.jpg"
			alt="Pibble Patrol" />

		<div className="quote-container">
			<div className="quote">
				{Math.random() <= .5
					? (
						<blockquote>
							<p>
								"Be excellent to each other."
							</p>
							<cite>
					<span>
						~ Bill S. Preston, Esq
					</span>
							</cite>
						</blockquote>
					)
					: (
						<blockquote>
							<p>
								"Whatever you do, always give 100%. Unless you’re donating blood."
							</p>
							<cite>
					<span>
						~ Bill Murray
					</span>
							</cite>
						</blockquote>
					)}
			</div>
		</div>
	</footer>
);

export default Footer;
