import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import "dotenv/config";

export const env = createEnv({
  server: {
    SHOPIFY_ACCESS_TOKEN: z.string().min(1),
    CONTENTFUL_SPACE_ID: z.string().min(1),
    CONTENTFUL_SPACE_TOKEN: z.string().min(1),
    CONTENTFUL_SPACE_ENVIRONMENT: z.string().min(1),
  },
  clientPrefix: "VITE_",
  client: {
    VITE_SHOPIFY_PUBLIC_TOKEN: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
