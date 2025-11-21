import { graphql } from "../_generated";

export const cartFragment = graphql(`
  fragment cart on Cart {
    id
    checkoutUrl
    cost {
      totalAmount {
        amount
        currencyCode
      }
      subtotalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 20) {
      edges {
        node {
          cost {
            amountPerQuantity {
              amount
              currencyCode
            }
            totalAmount {
              amount
              currencyCode
            }
            subtotalAmount {
              amount
              currencyCode
            }
            compareAtAmountPerQuantity {
              amount
              currencyCode
            }
          }
          quantity
          merchandise {
            ... on ProductVariant {
              title
              sku
              image {
                id
                url
                width
                height
                altText
                thumbhash
              }
              product {
                handle
              }
            }
          }
        }
      }
    }
  }
`);
