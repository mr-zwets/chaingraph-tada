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