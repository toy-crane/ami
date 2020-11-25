import createAuthTokenMutation from "../graphql/mutations/logout.mutation";
import client from "../apollo/client";

// 신규 Access Token 가져오기
const fetchNewAccessToken = async () => {
	const data = await client.mutate({
		mutation: createAuthTokenMutation,
	});
	return data;
};

export { fetchNewAccessToken };
