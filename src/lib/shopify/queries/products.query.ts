import { graphql } from "../_generated";

export const productsQuery = graphql(`
  query products($first: Int = 20) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          vendor
          productType
          variantsCount {
            count
            precision
          }
          media(first: 2) {
            edges {
              node {
                id
                alt
                mediaContentType
                previewImage {
                  url
                  width
                  height
                  altText
                  thumbhash
                }
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
          selectedOrFirstAvailableVariant {
            image {
              url
            }
            id
            sku
            price {
              amount
            }
          }
        }
      }
    }
  }
`);