import { graphql } from "../_generated";

export const contentRowFragment = graphql(`
  fragment contentRow on ContentRow {
    __typename
    type
    numberOfColumns
    contentCollection(limit: 4) {
      items {
        ...splash
      }
    }
  }
`);
