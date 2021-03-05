import styled from "@emotion/styled";

const StyledButton = styled.a`
	background-color: #3e68ff;
	text-decoration: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	border-radius: 8px;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
	padding: 0.25em 0.75em;
	min-width: 10ch;
	min-height: 44px;
	text-align: center;
	line-height: 1.1;
	&:hover,
	&:active {
		background-color: #2b50fd;
	}
	transition: 220ms all ease-in-out;
	&:focus {
		outline-style: solid;
		outline-color: transparent;
		box-shadow: 0 0 0 4px #0022b5;
	}
`;

export { StyledButton };
