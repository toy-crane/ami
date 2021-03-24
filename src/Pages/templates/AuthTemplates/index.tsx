import { BoxProps, Box, SxStyleProp } from "theme-ui";
import React from "react";
import { Header } from "components";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	sx?: SxStyleProp;
}

const SmallContainer: React.FC<ContainerProps> = ({
	sx,
	...props
}: ContainerProps) => {
	return (
		<Box bg={props.baseColor} sx={sx}>
			<Box
				sx={{
					px: 3,
					mx: "auto",
					maxWidth: "authContainer",
				}}
				{...props}
			>
				{props.children}
			</Box>
		</Box>
	);
};

interface TitleContainerProps {
	sx?: SxStyleProp;
	children: React.ReactNode;
}

const TitleContainer = ({ sx, children }: TitleContainerProps) => (
	<SmallContainer sx={sx}>{children}</SmallContainer>
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
export { SmallContainer, TitleContainer, ContentContainer };
