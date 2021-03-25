import { SxStyleProp } from "theme-ui";
import React from "react";
import { Header, SmallContainer } from "components";

interface TitleContainerProps {
	sx?: SxStyleProp;
	children: React.ReactNode;
}

const TitleContainer = ({ sx, children }: TitleContainerProps) => (
	<SmallContainer sx={sx}>
		{children}
	</SmallContainer>
);

const ContentContainer: React.FC = (props) => (
	<SmallContainer>{props.children}</SmallContainer>
);

const AuthHeaderWrapper: React.FC = (props) => (
	<SmallContainer>{props.children}</SmallContainer>
);

const AuthTemplate: React.FC = ({ children }) => (
	<React.Fragment>
		<AuthHeaderWrapper>
			<Header navless={true} />
		</AuthHeaderWrapper>
		{children}
	</React.Fragment>
);

export default AuthTemplate;
export { TitleContainer, ContentContainer };
