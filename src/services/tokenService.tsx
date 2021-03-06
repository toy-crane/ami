import client from "../apollo/client";
import createAuthTokenMutation from "../graphql/mutations/createAuthToken.mutation";

// 신규 Access Token 가져오기
const fetchNewAccessToken = async () => {
	const data = await client.mutate({
		mutation: createAuthTokenMutation,
	});
	return data;
};
export { fetchNewAccessToken };
