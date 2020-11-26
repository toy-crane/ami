import React from "react";
import { Link } from "react-router-dom";
import { useGetMeQuery } from "../generated/graphql";

type HeaderProps = {
	isLoggedIn: boolean;
};

const Header = ({ isLoggedIn }: HeaderProps) => {
	const { data } = useGetMeQuery();
	return (
		<div>
			{isLoggedIn ? (
				<div>
					ID: {data && data.me.email} <button>로그아웃</button>
				</div>
			) : (
				<Link to="/sign-in">로그인 하기</Link>
			)}
		</div>
	);
};

export default Header;
