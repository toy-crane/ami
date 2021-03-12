import { Box, Flex, NavLink } from "@theme-ui/components";
import React, { useRef, useState, useEffect } from "react";
import { Link } from "components";

interface DropdownProps {
	children: React.ReactElement;
}

const Dropdown = ({ children }: DropdownProps) => {
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
		<Box ref={node} sx={{ cursor: "pointer" }}>
			<Box onClick={toggling}>{children}</Box>
			{isOpen && (
				<Box
					sx={{
						bg: "background",
						position: "absolute",
						transform: "translateX(-80%)",
						zIndex: 10000,
						width: "200px",
						marginTop: 3,
						overflow: "hidden",
						boxShadow: (theme) => `0px 1px 5px 0px ${theme.colors?.gray40}`,
					}}
				>
					<Flex sx={{ flexDirection: "column" }}>
						<Link href="/mypage">마이 페이지</Link>
						<Link onClick={()=>alert('로그아웃 버튼 클릭')}>로그아웃</Link>
					</Flex>
				</Box>
			)}
		</Box>
	);
};

export default Dropdown;
