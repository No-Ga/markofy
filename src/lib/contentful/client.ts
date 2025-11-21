import type { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { print } from "graphql";
import gqlmin from "gqlmin";
import { env } from "../../env";

type GraphQLVariables = Record<string, unknown>;
type GraphQLResponse<T> = { data: T; errors?: any[] };

// type RequestOptions = {
//   headers?: HeadersInit;
//   preview?: boolean;
// };

const url = `https://graphql.contentful.com/content/v1/spaces/${env.CONTENTFUL_SPACE_ID}/environments/${env.CONTENTFUL_SPACE_ENVIRONMENT}`;
const headers = new Headers({
  "Content-Type": "application/json",
  Authorization: `Bearer ${env.CONTENTFUL_SPACE_TOKEN}`,
});

export default async function query<
  T = any,
  V extends GraphQLVariables = GraphQLVariables,
>(
  query: TypedDocumentNode<T, V>,
  variables: V
  // options: RequestOptions = {},
): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query: gqlmin(print(query)),
      variables,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error("Network response was not ok: " + error);
  }

  const { data, errors = [] }: GraphQLResponse<T> = await response.json();

  if (errors.length) {
    console.warn(errors.map((e) => e.message));
  }

  if (!data) {
    throw new Error("No data returned from GraphQL response");
  }

  return data;
}
