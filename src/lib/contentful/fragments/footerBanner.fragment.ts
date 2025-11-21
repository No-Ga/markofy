import { graphql } from "../_generated";

export const footerBannerFragment = graphql(`
  fragment footerBanner on FooterBanner {
    __typename
    ... on FooterBanner {
      title
      linkText
      desktopImage {
        ...asset
      }
      mobileImage {
        ...asset
      }
    }
  }
`);
