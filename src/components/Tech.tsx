import React from "react";
import { imageExtension } from "./utils/client";
import { cl } from "./utils/cloudinary";

interface IImageResourceData {
	created_at: string
	public_id: string
	version: number
	format: string
	height: number
	width: number
	type: string
}

interface IResponseData {
	resources: IImageResourceData[]
}

interface IImagesData {
	alt: string
	src: string
}

interface ITechState {
	images: IImagesData[]
}

const TAGGED_IMAGES_URL: string = "https://res.cloudinary.com/nulleffort/image/list/tech.json";

/**
 * Convert urls to consumable object for gallery component.
 * @param {IResponseData} data
 * @returns {IImagesData[]}
 */
const formatURLs = (data: IResponseData): IImagesData[] => {
	const { resources } = data;
	const images: IImagesData[] = resources.map((imageData: IImageResourceData) => ({
		src: cl.url(imageData.public_id.concat(imageExtension), {
			effect: "sharpen",
			gravity: "auto"
		}),
		alt: imageData.public_id
			.split("/")[2]
			.replace(/-/g, " ")
	}));

	return images.concat()
		.sort((a, b) => a.alt.localeCompare(b.alt));
};

class Tech extends React.Component {
	public state: ITechState = {
		images: []
	};

	// Fetch image data
	public componentDidMount() {
		fetch(TAGGED_IMAGES_URL)
			.then((res: Response) => res.json())
			.then((data: IResponseData) => formatURLs(data))
			.then((imgs: IImagesData[]) => this.setState({ images: imgs }))
			.catch(console.error);
	}

	public render() {
		return (
			<div className="panel">
				<h2>
					{"Tech I <3"}
				</h2>
				<div id="techContainer">
					{this.state.images.map((image: IImagesData, i: number) => {
						return <img key={i} alt={image.alt} src={image.src} className="tech-logo" height={75} />;
					})}
				</div>
			</div>
		)
	};
}

export default Tech;
