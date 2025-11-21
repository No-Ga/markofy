import { graphql } from "../_generated";

export const landingPageQuery = graphql(`
  query landingPage(
    $order: LandingPageOrder = sys_publishedAt_DESC
    $where: LandingPageFilter
    $skip: Int = 0
    $limit: Int = 1
    $locale: String
    $preview: Boolean = false
  ) {
    landingPageCollection(
      order: [$order]
      limit: $limit
      where: $where
      preview: $preview
      locale: $locale
      skip: $skip
    ) {
      items {
        title
        metaTitle
        description {
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
        metaDescription
        metaKeywords
        alternativeTerms
        componentsCollection(locale: $locale, limit: 8) {
          items {
            ...contentRow
            ...productList
            ...textBlock
            ...brandBanner
          }
        }
        footerBanner {
          ...footerBanner
        }
      }
    }
  }
`);
