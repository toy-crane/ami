/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useRef, useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { useLogout } from "../../services/auth";

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")`
	cursor: pointer;
`;
const DropDownListContainer = styled("div")`
	background: "#f6f6f6";
	position: absolute;
	transform: translateX(-80%);
	z-index: 20000;
	width: 200px;
	box-shadow: rgba(41, 42, 43, 0.2) 0px 1px 5px 0px;
	margin-top: 20px;
	overflow: hidden;
`;
const DropDownList = styled("ul")`
	background: #ffffff;
	color: black;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 0px;
	margin: 0px;
`;
const ListItem = styled("li")`
	list-style: none;
	cursor: pointer;
	padding: 8px;
	&:hover {
		color: #fd9e46;
	}
`;

type dropdownOptionType = {
	id: number;
	name: string;
	url: string;
};

const options: dropdownOptionType[] = [
	{ id: 1, name: "마이 페이지", url: "/mypage" },
];

const Dropdown: React.FC = ({ children }) => {
	const logout = useLogout();
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);
	const [selectedOption, setSelectedOption] = useState<number | null>(null);
	const node = useRef<HTMLDivElement>(null);
	const history = useHistory();

	const onOptionClicked = (value: any) => () => {
		setSelectedOption(value);
		setIsOpen(false);
		console.log(value);
	};

	const handleClickOutside = (e: any) => {
		if (node.current && node.current.contains(e.target)) {
			return;
		}
		setIsOpen(false);
	};

	// outside mouse 클릭 설정
	useEffect(() => {
		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]);

	useEffect(() => {
		if (selectedOption) {
			const option = options.find((option) => option.id === selectedOption);
			if (option) {
				history.push(option["url"]);
			}
		}
	});

	return (
		<DropDownContainer ref={node}>
			<DropDownHeader onClick={toggling}>{children}</DropDownHeader>
			{isOpen && (
				<DropDownListContainer>
					<DropDownList>
						{options.map((option) => (
							<ListItem key={option.id} onClick={onOptionClicked(option.id)}>
								{option.name}
							</ListItem>
						))}
					</DropDownList>
					<DropDownList>
						<ListItem key={options.length} onClick={logout}>
							로그아웃
						</ListItem>
					</DropDownList>
				</DropDownListContainer>
			)}
		</DropDownContainer>
	);
};

export default Dropdown;
