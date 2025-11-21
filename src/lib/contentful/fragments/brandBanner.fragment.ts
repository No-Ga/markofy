import { graphql } from "../_generated";

export const brandBannerFragment = graphql(`
  fragment brandBanner on BrandBanner {
    __typename
    bannerItemsCollection(limit: 20) {
      items {
        ... on ContentfulImage {
          image {
            ... on Asset {
              __typename
              url
              size
              title
              width
              height
              contentType
            }
          }
        }
      }
    }
  }
`);
