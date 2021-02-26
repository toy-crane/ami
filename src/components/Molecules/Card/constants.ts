import typescriptImg from "../../../assets/img/languages/typescript.svg";
import reactImg from "../../../assets/img/languages/react.svg";
import JSImg from "../../../assets/img/languages/javascript.svg";
import graphqlImg from "../../../assets/img/languages/graphql.svg";
import pythonImg from "../../../assets/img/languages/python.svg";

export type status = "inProgress" | "close";
export type language =
	| "typescript"
	| "react"
	| "javascript"
	| "python"
	| "graphql";

type statusObj = {
	text: string;
	variant: string;
};

export const StatusSet: Record<status, statusObj> = {
	inProgress: { text: "모집중", variant: "primary" },
	close: { text: "모집완료", variant: "secondary" },
};

type languageObj = {
	image: string;
	title: string;
	desc: string;
};

export const LanguageSet: Record<language, languageObj> = {
	typescript: {
		image: typescriptImg,
		title: "typescript 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	react: {
		image: reactImg,
		title: "React 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	javascript: {
		image: JSImg,
		title: "javascript 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	python: {
		image: pythonImg,
		title: "python 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
	graphql: {
		image: graphqlImg,
		title: "grapql 챌린지",
		desc: "단단한 javascript 코드가 만들고 싶다면?",
	},
};
