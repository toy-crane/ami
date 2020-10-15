import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/sign-up">Sign-Up</Link>
				</li>
				<li>
					<Link to="/sign-in">Sign-In</Link>
				</li>
			</ul>
		</nav>
	);
};

export default MainPage;
