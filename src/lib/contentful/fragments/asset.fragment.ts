import { graphql } from "../_generated";

export const assetFragment = graphql(`
  fragment asset on Asset {
    __typename
    url
    size
    title
    width
    height
    contentType
  }
`);
