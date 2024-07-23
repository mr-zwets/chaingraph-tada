## Chaingraph-Tada

Example setup of how to use ChainGraphs' GraphQL with Gql-tada for a fully typed developer experience

### Promblem

Unknown type for elements in query result

```ts
output: {
        transaction_hash: unknown;
        output_index: unknown;
        nonfungible_token_commitment: unknown;
        transaction: {
            outputs: {
                nonfungible_token_commitment: unknown;
                nonfungible_token_capability: unknown;
                fungible_token_amount: unknown;
            }[];
            inputs: {
                ...;
            }[];
        };
    }[];
```

### Fix

Declare types for the custom ChainGraph Scalars, like done in `schema.ts`

```ts
import type { introspection } from './generated/graphql-env.d.ts';

// provide types for custom scalars
declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection;
    scalars: {
      _text: string
      bigint: string
      bytea: string
    };
  }
}
```