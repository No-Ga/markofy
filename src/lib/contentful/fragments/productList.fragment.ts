import { graphql } from "../_generated";

export const productListFragment = graphql(`
  fragment productList on ProductList {
    __typename
    linkText
    heading
    commerceData
  }
`);
