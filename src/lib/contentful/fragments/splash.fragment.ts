import { graphql } from "../_generated";

export const splashFragment = graphql(`
  fragment splash on Splash {
    __typename
    header
    subheading
    linkText
    textColor
    contentPosition
    desktopVideo {
      ...asset
    }
    desktopImage {
      ...asset
    }
    mobileVideo {
      ...asset
    }
    mobileImage {
      ...asset
    }
    href {
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
      ... on NavigationLink {
        title
        internalLink {
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
`);
