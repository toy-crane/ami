import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../services/auth";
import { useGetMeQuery } from "../types/graphql-types";

const Header = () => {
	const { data, loading } = useGetMeQuery();
	const handleLogout = useLogout();
	const isLoggedIn = useMemo(() => data?.isLoggedIn || false, [data]);

	if (loading) {
		return <div>loading...</div>;
	}
	return (
		<div>
			{isLoggedIn ? (
				<div>
					ID: {data && data.me.email}
					<button onClick={handleLogout}>로그아웃</button>
				</div>
			) : (
				<Link to="/login">로그인 하기</Link>
			)}
		</div>
	);
};

export default Header;
