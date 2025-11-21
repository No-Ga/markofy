import { graphql } from "../_generated";

export const cartQuery = graphql(`
  query cart($id: ID!) {
    cart(id: $id) {
      ...cart
    }
  }
`);
