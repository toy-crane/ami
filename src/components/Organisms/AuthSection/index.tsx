import React from "react";
import { Flex, Heading } from "theme-ui";
import Logo from "../../Atoms/Logo";

interface AuthSectionProps {
	title: string;
}

const AuthSection: React.FC<AuthSectionProps> = (props: AuthSectionProps) => {
	return (
		<Flex sx={{ justifyContent: "center" }}>
			<Heading variant="styles.h2" mb={[3, 4]}>
				{props.title}
			</Heading>
		</Flex>
	);
};

export default AuthSection;
