import { graphql } from "../_generated";

export const createCartMutation = graphql(`
  mutation createCart($input: CartInput) {
    cartCreate(input: $input) {
      cart {
        ...cart
      }
    }
  }
`);
