/** @jsx jsx */
import { jsx, Image } from "theme-ui";

const Logo = () => (
	<Image
		src="/logo/black-logo.svg"
		sx={{ variant: "images.mainLogo" }}
		alt="logo"
	/>
);

export default Logo;
