import { z } from "zod";
import { productSchema } from "./product";

export const cartItemSchema = z.object({
  product: productSchema,
  quantity: z.number().int().positive(),
});

export type CartItem = z.infer<typeof cartItemSchema>;

export interface Cart {
  items: CartItem[];
  total: number;
}

