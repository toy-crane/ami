import { onError } from "@apollo/client/link/error";
import { fetchNewAccessToken } from "../services/tokenService";
import { fromPromise } from "@apollo/client";
import { accessTokenVar } from "./cache";

let isRefreshing = false;
let pendingRequests: any = [];

const resolvePendingRequests = () => {
	pendingRequests.map((callback: any) => callback());
	pendingRequests = [];
};

const errorLink = onError(
	({ graphQLErrors, networkError, operation, forward }) => {
		if (graphQLErrors) {
			for (let err of graphQLErrors) {
				switch (err.extensions!.code) {
					case "UNAUTHENTICATED":
						let forward$;
						if (!isRefreshing) {
							isRefreshing = true;
							forward$ = fromPromise(
								fetchNewAccessToken()
									.then(
										({
											data: {
												createAuthToken: { token },
											},
										}) => {
											// 신규 토큰 저장
											accessTokenVar(token);
											// 실패한 요청들 다시 시도하기
											resolvePendingRequests();
											return true;
										}
									)
									// eslint-disable-next-line no-loop-func
									.catch((err) => {
										// 신규 토큰 발급이 실패 했을 때 (기존 request 전부 삭제)
										pendingRequests = [];
										return false;
									})
									// eslint-disable-next-line no-loop-func
									.finally(() => {
										isRefreshing = false;
									})
							);
						} else {
							forward$ = fromPromise(
								// refreshing 하는 사이에 들어온 request들을 모아 놓는다.
								// eslint-disable-next-line no-loop-func
								new Promise((resolve) => {
									pendingRequests.push(() => resolve());
								})
							);
						}
						return forward$.flatMap(() => forward(operation));
					// 잘못된 토큰의 경우 그대로 두기
					case "INVALID_REFRESH_TOKEN":
					case "INVALID_ACCESS_TOKEN":
						return forward(operation);
					default:
						console.log(
							`[GraphQL error]: Message: ${err.message}, Location: ${
								err.locations
							}, Path: ${err.path} Code: ${err.extensions!.code}`
						);
				}
			}
		}

		if (networkError) console.log(`[Network error]: ${networkError}`);
	}
);

export default errorLink;
