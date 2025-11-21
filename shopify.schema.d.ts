/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as API from './src/lib/shopify/schema.d.ts';

export type ProductsQueryVariables = API.Exact<{ [key: string]: never; }>;


export type ProductsQuery = { products: { edges: Array<{ node: Pick<API.Product, 'id'> }> } };

interface GeneratedQueryTypes {
  "#graphql\n      query products {\n        products(first: 20) {\n          edges {\n            node {\n              id\n            }\n          }\n        }\n      }\n    ": {return: ProductsQuery, variables: ProductsQueryVariables},
}

interface GeneratedMutationTypes {
}

          declare module 'shopify' {
            interface APIQueries extends GeneratedQueryTypes {}
            interface APIMutations extends GeneratedMutationTypes {}
          }
        
