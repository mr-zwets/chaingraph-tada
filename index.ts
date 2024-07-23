import { graphql } from "gql.tada";
import { request } from 'graphql-request'

const REDEEMER_TOKEN_ID = "81668a5065a6c309fa0d5311af91634fa49e2c3d4b244dd8573061186c7bd8c2";
const CHAINGRAPH_URL = "https://demo.chaingraph.cash/v1/graphql";


export async function queryInfo(
  redeemerTokenId: string,
  chaingraphUrl:string,
){
  // query type filled with 'unknown type' elements
  const query = graphql(`query {
    output(
      where: {
        token_category: { _eq: "\\\\x${redeemerTokenId}" }
        _and: { nonfungible_token_capability: { _eq: "none" } }
        _not: { spent_by: {} }
      }
    ) {
      transaction_hash
      output_index
      nonfungible_token_commitment
      transaction {
        outputs {
          nonfungible_token_commitment
          nonfungible_token_capability
          fungible_token_amount
        }
        inputs {
          outpoint {
            nonfungible_token_commitment
            value_satoshis
          }
        }
      }
    }
  }`);
  return await request(chaingraphUrl, query)
}

// result type filled with 'unknown type' elements
const result = await queryInfo(REDEEMER_TOKEN_ID, CHAINGRAPH_URL)
console.log(result)