import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  isLoggedIn: Scalars['Boolean'];
  me: User;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: User;
  createAuthToken?: Maybe<AccessToken>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationActivateUserArgs = {
  mobile: Scalars['String'];
  name: Scalars['String'];
};

export type AccessToken = {
  __typename?: 'accessToken';
  token: Scalars['String'];
};

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'name' | 'email' | 'mobile' | 'isActive'>
);

export type ActivateUserMutationVariables = Exact<{
  mobile: Scalars['String'];
  name: Scalars['String'];
}>;


export type ActivateUserMutation = (
  { __typename?: 'Mutation' }
  & { activateUser: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type CreateAuthTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateAuthTokenMutation = (
  { __typename?: 'Mutation' }
  & { createAuthToken?: Maybe<(
    { __typename?: 'accessToken' }
    & Pick<AccessToken, 'token'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'isLoggedIn'>
  & { me: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  name
  email
  mobile
  isActive
}
    `;
export const ActivateUserDocument = gql`
    mutation activateUser($mobile: String!, $name: String!) {
  activateUser(mobile: $mobile, name: $name) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;
export type ActivateUserMutationFn = Apollo.MutationFunction<ActivateUserMutation, ActivateUserMutationVariables>;

/**
 * __useActivateUserMutation__
 *
 * To run a mutation, you first call `useActivateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useActivateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [activateUserMutation, { data, loading, error }] = useActivateUserMutation({
 *   variables: {
 *      mobile: // value for 'mobile'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useActivateUserMutation(baseOptions?: Apollo.MutationHookOptions<ActivateUserMutation, ActivateUserMutationVariables>) {
        return Apollo.useMutation<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument, baseOptions);
      }
export type ActivateUserMutationHookResult = ReturnType<typeof useActivateUserMutation>;
export type ActivateUserMutationResult = Apollo.MutationResult<ActivateUserMutation>;
export type ActivateUserMutationOptions = Apollo.BaseMutationOptions<ActivateUserMutation, ActivateUserMutationVariables>;
export const CreateAuthTokenDocument = gql`
    mutation createAuthToken {
  createAuthToken {
    token
  }
}
    `;
export type CreateAuthTokenMutationFn = Apollo.MutationFunction<CreateAuthTokenMutation, CreateAuthTokenMutationVariables>;

/**
 * __useCreateAuthTokenMutation__
 *
 * To run a mutation, you first call `useCreateAuthTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAuthTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAuthTokenMutation, { data, loading, error }] = useCreateAuthTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateAuthTokenMutation(baseOptions?: Apollo.MutationHookOptions<CreateAuthTokenMutation, CreateAuthTokenMutationVariables>) {
        return Apollo.useMutation<CreateAuthTokenMutation, CreateAuthTokenMutationVariables>(CreateAuthTokenDocument, baseOptions);
      }
export type CreateAuthTokenMutationHookResult = ReturnType<typeof useCreateAuthTokenMutation>;
export type CreateAuthTokenMutationResult = Apollo.MutationResult<CreateAuthTokenMutation>;
export type CreateAuthTokenMutationOptions = Apollo.BaseMutationOptions<CreateAuthTokenMutation, CreateAuthTokenMutationVariables>;
export const LogoutDocument = gql`
    mutation logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetMeDocument = gql`
    query getMe {
  me {
    ...UserFields
  }
  isLoggedIn @client
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, baseOptions);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;