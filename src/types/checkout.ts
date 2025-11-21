import { z } from "zod";

export const shippingSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  country: z.string().min(1, "Country is required"),
});

export const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, "Card number must be 16 digits"),
  cardHolder: z.string().min(1, "Card holder name is required"),
  expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, "Invalid expiry month"),
  expiryYear: z.string().regex(/^\d{4}$/, "Invalid expiry year"),
  cvv: z.string().regex(/^\d{3}$/, "CVV must be 3 digits"),
});

export const checkoutSchema = z.object({
  shipping: shippingSchema,
  payment: paymentSchema,
});

export type ShippingInfo = z.infer<typeof shippingSchema>;
export type PaymentInfo = z.infer<typeof paymentSchema>;
export type CheckoutInput = z.infer<typeof checkoutSchema>;

