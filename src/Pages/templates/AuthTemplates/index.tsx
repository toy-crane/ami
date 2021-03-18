import { BoxProps, Box, SxStyleProp } from "theme-ui";
import React from "react";
import { Header } from "components";

export interface ContainerProps extends BoxProps {
	baseColor?: string;
	sx?: SxStyleProp;
}

const AuthContainer: React.FC<ContainerProps> = ({
	sx,
	...props
}: ContainerProps) => {
	console.log(sx);
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
	<AuthContainer sx={sx}>{children}</AuthContainer>
);

const ContentContainer: React.FC = (props) => (
	<AuthContainer>{props.children}</AuthContainer>
);

const AuthHeaderWrapper: React.FC = (props) => (
	<AuthContainer>{props.children}</AuthContainer>
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
export { AuthContainer, TitleContainer, ContentContainer };
