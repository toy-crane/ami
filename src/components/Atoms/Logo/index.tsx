import React from "react";
import { BoxProps, BoxOwnProps, Link, Flex, Box } from "theme-ui";

interface LogoProps extends BoxProps, BoxOwnProps {
	height?: number;
	color?: "black" | "white";
}
const Logo: React.FC<LogoProps> = (props: LogoProps) => {
	const color = props.color ? props.color : "black";
	return (
		<Box {...props}>
			<Link href="/">
				<Flex sx={{ alignItems: "center" }}>
					<svg
						width="109"
						height="24"
						viewBox="0 0 109 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.95007 5.03911C8.04593 5.03453 9.12805 5.28308 10.1121 5.76536V8.93855C9.19329 8.27146 8.08547 7.91524 6.95007 7.92179C6.42696 7.92023 5.90879 8.02304 5.4259 8.2242C4.94301 8.42537 4.5051 8.72084 4.13782 9.09333C3.77053 9.46582 3.48124 9.90784 3.28688 10.3935C3.09253 10.8792 2.99702 11.3987 3.00594 11.9218C2.997 12.4443 3.09257 12.9633 3.28706 13.4484C3.48154 13.9335 3.77101 14.3747 4.13845 14.7464C4.50589 15.118 4.9439 15.4124 5.42673 15.6123C5.90956 15.8122 6.42749 15.9137 6.95007 15.9106C8.08731 15.9293 9.19888 15.5719 10.1121 14.8939V18.0335C9.13615 18.5443 8.05158 18.8126 6.95007 18.8156C6.03205 18.8498 5.11682 18.6948 4.26117 18.3605C3.40552 18.0261 2.62772 17.5195 1.97604 16.872C1.32436 16.2245 0.812711 15.45 0.472847 14.5965C0.132983 13.7431 -0.0278429 12.8288 0.000350435 11.9106C-0.0231702 10.9952 0.141112 10.0846 0.483063 9.2351C0.825015 8.3856 1.33738 7.61516 1.98857 6.9713C2.63975 6.32744 3.41595 5.82382 4.26927 5.49151C5.12259 5.15919 6.03495 5.00523 6.95007 5.03911V5.03911ZM25.6316 11.9106C25.6316 13.7301 24.9089 15.475 23.6223 16.7616C22.3357 18.0482 20.5908 18.771 18.7713 18.771C16.9518 18.771 15.2069 18.0482 13.9203 16.7616C12.6337 15.475 11.911 13.7301 11.911 11.9106C11.888 11.0029 12.0497 10.1 12.3862 9.2567C12.7227 8.41337 13.227 7.64718 13.8685 7.00462C14.51 6.36206 15.2754 5.85651 16.1182 5.51864C16.9609 5.18077 17.8636 5.01763 18.7713 5.03911C19.6769 5.02551 20.576 5.19404 21.4152 5.53469C22.2545 5.87534 23.0167 6.38117 23.6566 7.02213C24.2965 7.66309 24.8011 8.42611 25.1404 9.26587C25.4796 10.1056 25.6467 11.005 25.6316 11.9106V11.9106ZM22.6372 11.9106C22.6372 11.4015 22.5369 10.8973 22.3421 10.4269C22.1473 9.95652 21.8617 9.52912 21.5016 9.1691C21.1416 8.80907 20.7142 8.52349 20.2438 8.32865C19.7734 8.1338 19.2693 8.03352 18.7601 8.03352C18.251 8.03352 17.7468 8.1338 17.2764 8.32865C16.806 8.52349 16.3786 8.80907 16.0186 9.1691C15.6586 9.52912 15.373 9.95652 15.1782 10.4269C14.9833 10.8973 14.883 11.4015 14.883 11.9106C14.883 12.4198 14.9833 12.9239 15.1782 13.3943C15.373 13.8647 15.6586 14.2921 16.0186 14.6521C16.3786 15.0122 16.806 15.2977 17.2764 15.4926C17.7468 15.6874 18.251 15.7877 18.7601 15.7877C19.2693 15.7877 19.7734 15.6874 20.2438 15.4926C20.7142 15.2977 21.1416 15.0122 21.5016 14.6521C21.8617 14.2921 22.1473 13.8647 22.3421 13.3943C22.5369 12.9239 22.6372 12.4198 22.6372 11.9106V11.9106ZM38.3244 0H41.2406V18.5028H38.3244V16.3575C37.8408 17.1194 37.1698 17.7445 36.3755 18.1729C35.5813 18.6014 34.6904 18.8188 33.7881 18.8045C30.0339 18.8045 27.3747 15.7654 27.3747 11.9106C27.3747 8.05587 30.0339 5.03911 33.8104 5.03911C34.6993 5.02738 35.5764 5.24292 36.3585 5.66529C37.1407 6.08766 37.802 6.70285 38.2797 7.45251L38.3244 0ZM38.3244 11.9106C38.3156 11.1325 38.0768 10.3744 37.6381 9.73168C37.1993 9.08898 36.5803 8.59041 35.8589 8.29873C35.1375 8.00705 34.3459 7.93529 33.5837 8.09249C32.8216 8.24968 32.123 8.62881 31.5759 9.18214C31.0288 9.73547 30.6575 10.4383 30.5089 11.2021C30.3603 11.966 30.441 12.7567 30.7408 13.4748C31.0406 14.1929 31.5461 14.8063 32.1937 15.2377C32.8413 15.6692 33.6021 15.8994 34.3802 15.8994C34.9033 15.904 35.4219 15.8037 35.9054 15.6043C36.3889 15.4049 36.8276 15.1105 37.1953 14.7386C37.5631 14.3667 37.8525 13.9248 38.0464 13.439C38.2403 12.9533 38.3349 12.4335 38.3244 11.9106ZM56.7154 11.3966C56.7167 11.9018 56.6529 12.405 56.5255 12.8939H46.7937C46.9444 13.835 47.4394 14.6866 48.1827 15.2833C48.926 15.88 49.8645 16.1792 50.816 16.1229C52.4632 16.1009 54.0677 15.5959 55.4305 14.6704V17.5978C53.9481 18.398 52.2883 18.8129 50.6037 18.8045C49.6971 18.8283 48.7952 18.6654 47.9542 18.3259C47.1132 17.9864 46.3509 17.4776 45.7149 16.831C45.0788 16.1845 44.5825 15.4141 44.2568 14.5676C43.9311 13.7211 43.783 12.8168 43.8216 11.9106C43.7854 11.0202 43.9298 10.1317 44.2461 9.29858C44.5624 8.46546 45.0441 7.70499 45.6621 7.06297C46.2801 6.42095 47.0217 5.91066 47.8421 5.56284C48.6626 5.21502 49.545 5.03686 50.4361 5.03911C51.2729 5.01872 52.1051 5.16983 52.8813 5.48313C53.6576 5.79643 54.3615 6.26529 54.9497 6.86084C55.5379 7.4564 55.9981 8.16606 56.3017 8.94611C56.6054 9.72617 56.7462 10.5601 56.7154 11.3966ZM53.8775 10.6145C53.8606 10.1809 53.7567 9.75516 53.5722 9.36245C53.3876 8.96975 53.126 8.61811 52.803 8.32841C52.4799 8.03871 52.102 7.81685 51.6916 7.67599C51.2812 7.53512 50.8466 7.47813 50.4138 7.50838C49.5281 7.47656 48.6627 7.77791 47.9884 8.35296C47.314 8.928 46.8798 9.73496 46.7713 10.6145H53.8775ZM78.9948 11.9106C78.9948 15.7654 76.3132 18.8045 72.5925 18.8045C71.6983 18.8248 70.8146 18.6093 70.03 18.1798C69.2455 17.7503 68.5879 17.1218 68.1233 16.3575V24H65.14V5.30726H68.0897V7.62011C68.5203 6.81623 69.1668 6.14862 69.9565 5.69257C70.7462 5.23653 71.6476 5.0102 72.559 5.03911C76.3132 5.03911 78.9948 8.02235 78.9948 11.9106ZM75.9445 11.9106C76.0032 11.3619 75.9459 10.8071 75.7761 10.282C75.6063 9.75698 75.328 9.27354 74.9592 8.86312C74.5903 8.45269 74.1393 8.12447 73.6353 7.89979C73.1313 7.67511 72.5857 7.559 72.0339 7.559C71.4821 7.559 70.9364 7.67511 70.4325 7.89979C69.9285 8.12447 69.4774 8.45269 69.1086 8.86312C68.7397 9.27354 68.4614 9.75698 68.2916 10.282C68.1219 10.8071 68.0645 11.3619 68.1233 11.9106C68.0645 12.4593 68.1219 13.0142 68.2916 13.5392C68.4614 14.0642 68.7397 14.5477 69.1086 14.9581C69.4774 15.3685 69.9285 15.6968 70.4325 15.9214C70.9364 16.1461 71.4821 16.2622 72.0339 16.2622C72.5857 16.2622 73.1313 16.1461 73.6353 15.9214C74.1393 15.6968 74.5903 15.3685 74.9592 14.9581C75.328 14.5477 75.6063 14.0642 75.7761 13.5392C75.9459 13.0142 76.0032 12.4593 75.9445 11.9106V11.9106ZM94.5031 11.9106C94.5405 12.8356 94.3905 13.7585 94.0623 14.6241C93.7341 15.4896 93.2343 16.2799 92.5931 16.9476C91.9518 17.6152 91.1823 18.1464 90.3307 18.5093C89.4791 18.8721 88.5629 19.0592 87.6372 19.0592C86.7115 19.0592 85.7954 18.8721 84.9437 18.5093C84.0921 18.1464 83.3226 17.6152 82.6814 16.9476C82.0401 16.2799 81.5404 15.4896 81.2122 14.6241C80.8839 13.7585 80.734 12.8356 80.7713 11.9106C80.734 10.9857 80.8839 10.0627 81.2122 9.19715C81.5404 8.3316 82.0401 7.54128 82.6814 6.87365C83.3226 6.20601 84.0921 5.67483 84.9437 5.31197C85.7954 4.94912 86.7115 4.76208 87.6372 4.76208C88.5629 4.76208 89.4791 4.94912 90.3307 5.31197C91.1823 5.67483 91.9518 6.20601 92.5931 6.87365C93.2343 7.54128 93.7341 8.3316 94.0623 9.19715C94.3905 10.0627 94.5405 10.9857 94.5031 11.9106V11.9106ZM91.4976 11.9106C91.4976 10.8823 91.0891 9.89619 90.362 9.1691C89.6349 8.442 88.6487 8.03352 87.6205 8.03352C86.5922 8.03352 85.606 8.442 84.8789 9.1691C84.1518 9.89619 83.7434 10.8823 83.7434 11.9106C83.7434 12.9389 84.1518 13.925 84.8789 14.6521C85.606 15.3792 86.5922 15.7877 87.6205 15.7877C88.6487 15.7877 89.6349 15.3792 90.362 14.6521C91.0891 13.925 91.4976 12.9389 91.4976 11.9106V11.9106ZM100.771 1.58659L97.9892 2.23464V5.30726H95.5981V7.82123H97.8328V18.4916H100.782V7.82123H103.174V5.30726H100.771V1.58659ZM105.352 14.8268L104.525 21.7989H107.263L108.648 14.8268H105.352Z"
							fill={color}
						/>
					</svg>
				</Flex>
			</Link>
		</Box>
	);
};

export default Logo;
