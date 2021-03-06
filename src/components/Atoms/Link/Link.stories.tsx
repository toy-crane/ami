import React from "react";
import Link from "./index";

export default {
	title: "Atoms/Link",
	component: Link,
};

export const LinkWithOutlink = () => (
	<Link href="http://react.codepot.kr/">외부 링크</Link>
);
export const LinkWithinlink = () => <Link href="/mypage">내부 링크</Link>;
