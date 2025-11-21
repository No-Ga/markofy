import { graphql } from "../_generated";

export const productQuery = graphql(`
  query product($handle: String!) {
    product(handle: $handle) {
      id
      tags
      title
      handle
      vendor
      description
      productType
      totalInventory
      priceRange {
        minVariantPrice {
          amount
        }
        maxVariantPrice {
          amount
        }
      }
      selectedOrFirstAvailableVariant {
        id
        sku
        price {
          amount
          currencyCode
        }
        quantityAvailable
      }
      options {
        id
        name
        optionValues {
          id
          name
          swatch {
            color
            image {
              previewImage {
                url
                thumbhash
              }
            }
          }
          firstSelectableVariant {
            sku
            price {
              amount
              currencyCode
            }
          }
        }
      }
      category {
        id
        name
        ancestors {
          id
          name
          ancestors {
            id
            name
          }
        }
      }
      media(first: 10) {
        edges {
          node {
            alt
            previewImage {
              id
              url
              width
              height
              altText
              thumbhash
            }
            mediaContentType
          }
        }
      }
    }
  }
`);
