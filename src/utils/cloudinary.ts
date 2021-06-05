import cloudinary from "cloudinary-core";

export const cl = new cloudinary.Cloudinary({
	cloud_name: "nulleffort",
	secure: true
});
