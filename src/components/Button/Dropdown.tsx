/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, NavLink, Flex } from "theme-ui";
import React, { useRef, useState, useEffect } from "react";
import { useLogout } from "../../services/auth";
import styled from "@emotion/styled";

const DropDownContainer = styled("div")``;

type DropdownHeaderTypes = {
	onClick: () => void;
};

const DropDownHeader: React.FC<DropdownHeaderTypes> = (props) => (
	<div {...props} sx={{ cursor: "pointer" }} />
);

const DropDownListContainer: React.FC = (props) => (
	<div
		{...props}
		sx={{
			bg: "background",
			position: "absolute",
			transform: "translateX(-80%)",
			zIndex: 10000,
			width: "200px",
			marginTop: 2,
			overflow: "hidden",
			boxShadow: (theme) => `0px 1px 5px 0px ${theme.colors?.gray}`,
		}}
	/>
);

const Dropdown: React.FC = ({ children }) => {
	const logout = useLogout();
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);
	const node = useRef<HTMLDivElement>(null);

	const handleClickOutside = (e: any) => {
		if (node.current?.contains(e.target)) {
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

	return (
		<DropDownContainer ref={node}>
			<DropDownHeader onClick={toggling}>{children}</DropDownHeader>
			{isOpen && (
				<DropDownListContainer>
					<Flex sx={{ flexDirection: "column", alignItems: "flex-start" }}>
						<NavLink href="/mypage" p={2}>
							마이 페이지
						</NavLink>
						<NavLink onClick={logout} p={2}>
							로그아웃
						</NavLink>
					</Flex>
				</DropDownListContainer>
			)}
		</DropDownContainer>
	);
};

export default Dropdown;
