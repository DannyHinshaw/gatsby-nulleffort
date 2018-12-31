// please note,
// that IE11 now returns undefined again for window.chrome
// and new Opera 30 outputs true for window.chrome
// but needs to check if window.opr is not undefined
// and new IE Edge outputs to true now for window.chrome
// and if not iOS Chrome check
// so use the below updated condition
const clientIsChrome = () => {
	const windowGlobal = typeof window !== "undefined" && window;

	// @ts-ignore
	const isChromium = windowGlobal.chrome;
	// @ts-ignore
	const winNav = windowGlobal.navigator;
	const vendorName = windowGlobal && winNav.vendor;
	// @ts-ignore
	const isOpera = typeof windowGlobal.opr !== "undefined";
	const isIEedge = windowGlobal && winNav.userAgent.indexOf("Edge") > -1;
	const isIOSChrome = windowGlobal && winNav.userAgent.match("CriOS");

	if (isIOSChrome) {
		// is Google Chrome on IOS
		return true;
	} else if (isChromium !== null && typeof isChromium !== "undefined" && vendorName === "Google Inc." && !isOpera && !isIEedge) {
		// is Google Chrome
		return true;
	}
// not Google Chrome
	return false;
};

export const imageExtension: string = clientIsChrome() ? ".webp" : ".jpc";
