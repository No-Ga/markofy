import { z } from "zod";
import query from "../../shopify/client";
import { publicProcedure, router } from "../trpc";
import { productsQuery } from "../../shopify/queries/products.query";
import { productQuery } from "../../shopify/queries/product.query";
import { cartQuery } from "../../shopify/queries/cart.query";
import { createCartMutation } from "../../shopify/mutations/createCart.mutation";
import { addCartLinesMutation } from "../../shopify/mutations/addCartLines.mutation";

export const shopifyRouter = router({
  product: publicProcedure.input(z.string()).query(async ({ input }) => {
    const response = await query(productQuery, { handle: input });
    return response.product;
  }),
  products: publicProcedure.query(async () => {
    const response = await query(productsQuery, { first: 60 });
    return response.products.edges.map((edge) => edge.node);
  }),
  cart: publicProcedure.input(z.string()).query(async ({ input }) => {
    const response = await query(cartQuery, { id: input });
    return response.cart;
  }),
  createCart: publicProcedure.mutation(async () => {
    const response = await query(createCartMutation, { input: undefined });
    return response.cartCreate?.cart;
  }),
  addCartLines: publicProcedure
    .input(
      z.object({
        cartId: z.string(),
        lines: z.array(
          z.object({
            merchandiseId: z.string(),
            quantity: z.number(),
          })
        ),
      })
    )
    .mutation(async ({ input }) => {
      const response = await query(addCartLinesMutation, {
        cartId: input.cartId,
        lines: input.lines,
      });
      return response.cartLinesAdd?.cart;
    }),
});
