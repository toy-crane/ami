import React from "react";

type ButtonProps = {
	title: string;
};

const Button: React.FC<ButtonProps> = ({ title }: ButtonProps) => (
	<button>{title}</button>
);

export default Button;
