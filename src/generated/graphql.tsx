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
  me: UserPersonalData;
};

export type UserPersonalData = {
  __typename?: 'UserPersonalData';
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  isActive: Scalars['Boolean'];
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmVerificationToken: SignInResponse;
  requestPasswordReset?: Maybe<RequestPasswordResetResponse>;
  resendVerificationToken: Scalars['Boolean'];
  resetPassword: SignInResponse;
  signIn: SignInResponse;
  signUp: SignUpResponse;
};


export type MutationConfirmVerificationTokenArgs = {
  verificationToken: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRequestPasswordResetArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationResendVerificationTokenArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  resetToken: Scalars['String'];
};


export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  user?: Maybe<UserPersonalData>;
  token?: Maybe<Scalars['String']>;
};

export type RequestPasswordResetResponse = {
  __typename?: 'requestPasswordResetResponse';
  email: Scalars['String'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  user?: Maybe<UserPersonalData>;
};

export type SocketResponse = {
  __typename?: 'SocketResponse';
  user?: Maybe<UserPersonalData>;
  socketId?: Maybe<Scalars['String']>;
};

export type UserFragment = (
  { __typename?: 'UserPersonalData' }
  & Pick<UserPersonalData, 'name' | 'email' | 'isActive'>
);

export type ConfirmVerificationTokenMutationVariables = Exact<{
  email: Scalars['String'];
  verificationToken: Scalars['String'];
}>;


export type ConfirmVerificationTokenMutation = (
  { __typename?: 'Mutation' }
  & { confirmVerificationToken: (
    { __typename?: 'SignInResponse' }
    & Pick<SignInResponse, 'token'>
  ) }
);

export type RequestPasswordResetMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestPasswordResetMutation = (
  { __typename?: 'Mutation' }
  & { requestPasswordReset?: Maybe<(
    { __typename?: 'requestPasswordResetResponse' }
    & Pick<RequestPasswordResetResponse, 'email'>
  )> }
);

export type ResendVerificationTokenMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type ResendVerificationTokenMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'resendVerificationToken'>
);

export type ResetPasswordMutationVariables = Exact<{
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
  resetToken: Scalars['String'];
}>;


export type ResetPasswordMutation = (
  { __typename?: 'Mutation' }
  & { resetPassword: (
    { __typename?: 'SignInResponse' }
    & Pick<SignInResponse, 'token'>
  ) }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { signIn: (
    { __typename?: 'SignInResponse' }
    & Pick<SignInResponse, 'token'>
  ) }
);

export type SignUpMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  confirmPassword: Scalars['String'];
}>;


export type SignUpMutation = (
  { __typename?: 'Mutation' }
  & { signUp: (
    { __typename?: 'SignUpResponse' }
    & { user?: Maybe<(
      { __typename?: 'UserPersonalData' }
      & UserFragment
    )> }
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me: (
    { __typename?: 'UserPersonalData' }
    & UserFragment
  ) }
);

export const UserFragmentDoc = gql`
    fragment User on UserPersonalData {
  name
  email
  isActive
}
    `;
export const ConfirmVerificationTokenDocument = gql`
    mutation confirmVerificationToken($email: String!, $verificationToken: String!) {
  confirmVerificationToken(email: $email, verificationToken: $verificationToken) {
    token
  }
}
    `;
export type ConfirmVerificationTokenMutationFn = Apollo.MutationFunction<ConfirmVerificationTokenMutation, ConfirmVerificationTokenMutationVariables>;

/**
 * __useConfirmVerificationTokenMutation__
 *
 * To run a mutation, you first call `useConfirmVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmVerificationTokenMutation, { data, loading, error }] = useConfirmVerificationTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *      verificationToken: // value for 'verificationToken'
 *   },
 * });
 */
export function useConfirmVerificationTokenMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmVerificationTokenMutation, ConfirmVerificationTokenMutationVariables>) {
        return Apollo.useMutation<ConfirmVerificationTokenMutation, ConfirmVerificationTokenMutationVariables>(ConfirmVerificationTokenDocument, baseOptions);
      }
export type ConfirmVerificationTokenMutationHookResult = ReturnType<typeof useConfirmVerificationTokenMutation>;
export type ConfirmVerificationTokenMutationResult = Apollo.MutationResult<ConfirmVerificationTokenMutation>;
export type ConfirmVerificationTokenMutationOptions = Apollo.BaseMutationOptions<ConfirmVerificationTokenMutation, ConfirmVerificationTokenMutationVariables>;
export const RequestPasswordResetDocument = gql`
    mutation requestPasswordReset($email: String!) {
  requestPasswordReset(email: $email) {
    email
  }
}
    `;
export type RequestPasswordResetMutationFn = Apollo.MutationFunction<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;

/**
 * __useRequestPasswordResetMutation__
 *
 * To run a mutation, you first call `useRequestPasswordResetMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestPasswordResetMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestPasswordResetMutation, { data, loading, error }] = useRequestPasswordResetMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestPasswordResetMutation(baseOptions?: Apollo.MutationHookOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>) {
        return Apollo.useMutation<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>(RequestPasswordResetDocument, baseOptions);
      }
export type RequestPasswordResetMutationHookResult = ReturnType<typeof useRequestPasswordResetMutation>;
export type RequestPasswordResetMutationResult = Apollo.MutationResult<RequestPasswordResetMutation>;
export type RequestPasswordResetMutationOptions = Apollo.BaseMutationOptions<RequestPasswordResetMutation, RequestPasswordResetMutationVariables>;
export const ResendVerificationTokenDocument = gql`
    mutation resendVerificationToken($email: String!) {
  resendVerificationToken(email: $email)
}
    `;
export type ResendVerificationTokenMutationFn = Apollo.MutationFunction<ResendVerificationTokenMutation, ResendVerificationTokenMutationVariables>;

/**
 * __useResendVerificationTokenMutation__
 *
 * To run a mutation, you first call `useResendVerificationTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendVerificationTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendVerificationTokenMutation, { data, loading, error }] = useResendVerificationTokenMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendVerificationTokenMutation(baseOptions?: Apollo.MutationHookOptions<ResendVerificationTokenMutation, ResendVerificationTokenMutationVariables>) {
        return Apollo.useMutation<ResendVerificationTokenMutation, ResendVerificationTokenMutationVariables>(ResendVerificationTokenDocument, baseOptions);
      }
export type ResendVerificationTokenMutationHookResult = ReturnType<typeof useResendVerificationTokenMutation>;
export type ResendVerificationTokenMutationResult = Apollo.MutationResult<ResendVerificationTokenMutation>;
export type ResendVerificationTokenMutationOptions = Apollo.BaseMutationOptions<ResendVerificationTokenMutation, ResendVerificationTokenMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation resetPassword($password: String!, $confirmPassword: String!, $resetToken: String!) {
  resetPassword(
    password: $password
    confirmPassword: $confirmPassword
    resetToken: $resetToken
  ) {
    token
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *      resetToken: // value for 'resetToken'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, baseOptions);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  signIn(email: $email, password: $password) {
    token
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, baseOptions);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($name: String!, $email: String!, $password: String!, $confirmPassword: String!) {
  signUp(
    name: $name
    email: $email
    password: $password
    confirmPassword: $confirmPassword
  ) {
    user {
      ...User
    }
  }
}
    ${UserFragmentDoc}`;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      confirmPassword: // value for 'confirmPassword'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, baseOptions);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    ...User
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;