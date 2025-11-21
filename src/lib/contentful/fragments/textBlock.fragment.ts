import { graphql } from "../_generated";

export const textBlockFragment = graphql(`
  fragment textBlock on TextBlock {
    __typename
    title
    content {
      json
      links {
        entries {
          hyperlink {
            ... on Page {
              __typename
              slug
            }
            ... on EditorialPage {
              __typename
              slug
            }
            ... on Campaign {
              __typename
              slug
            }
            ... on LandingPage {
              __typename
              slug
            }
          }
        }
      }
    }
  }
`);
