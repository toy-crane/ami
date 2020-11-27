import React from "react";
import { Link } from "react-router-dom";
import { useGetMeQuery } from "../types/graphql-types";

const Header = () => {
	const { data, loading } = useGetMeQuery();
	const isLoggedIn = data?.isLoggedIn || false;

	if (loading) {
		return <div>loading...</div>;
	}

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
