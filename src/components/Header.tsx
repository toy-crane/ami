import React from "react";
import { useMe } from "../services/auth";

const Header = () => {
	const { data } = useMe();
	return <div>{data && data.me ? <div>ID: {data.me.email}</div> : null}</div>;
};

export default Header;
