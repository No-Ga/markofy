/// <reference types="node" />
import type { CodegenConfig } from "@graphql-codegen/cli";
import "dotenv/config";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "src/lib/shopify/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
      schema: {
        [`https://no-galleriet.myshopify.com/api/2025-10/graphql.json`]: {
          headers: {
            "Shopify-Storefront-Private-Token":
              import.meta.env.SHOPIFY_ACCESS_TOKEN ?? "",
          },
        },
      },
    },
    "src/lib/shopify/_generated/": {
      preset: "client",
      documents: "./src/lib/shopify/**/*.{query,mutation,fragment}.ts",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        useTypeImports: true,
      },
      schema: {
        [`https://no-galleriet.myshopify.com/api/2025-10/graphql.json`]: {
          headers: {
            "Shopify-Storefront-Private-Token":
              import.meta.env.SHOPIFY_ACCESS_TOKEN ?? "",
          },
        },
      },
    },
    "src/lib/contentful/schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
      schema: [
        {
          [`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}/environments/${import.meta.env.CONTENTFUL_SPACE_ENVIRONMENT}`]:
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.CONTENTFUL_SPACE_TOKEN}`,
              },
            },
        },
      ],
    },
    "src/lib/contentful/_generated/": {
      preset: "client",
      documents: "./src/lib/contentful/**/*.{query,mutation,fragment}.ts",
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
      config: {
        // documentMode: "string",
        useTypeImports: true,
      },
      schema: [
        {
          [`https://graphql.contentful.com/content/v1/spaces/${import.meta.env.CONTENTFUL_SPACE_ID}/environments/${import.meta.env.CONTENTFUL_SPACE_ENVIRONMENT}`]:
            {
              headers: {
                Authorization: `Bearer ${import.meta.env.CONTENTFUL_SPACE_TOKEN}`,
              },
            },
        },
      ],
    },
  },
};

export default config;
