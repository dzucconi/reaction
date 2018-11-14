/* eslint-disable promise/always-return */

import gql from "lib/gql"
import { mockxchange } from "test/fixtures/exchange/mockxchange"
import exchangeOrderJSON from "test/fixtures/exchange/order.json"
import { sampleOrder } from "test/fixtures/results/sample_order"
import { runQuery } from "test/utils"
import { OrderSellerFields } from "./order_fields"

let rootValue

describe("Order query", () => {
  beforeEach(() => {
    const resolvers = { Query: { order: () => exchangeOrderJSON } }

    rootValue = mockxchange(resolvers)
  })
  it("fetches order by id", () => {
    const query = gql`
      {
        order(id: "52dd3c2e4b8480091700027f") {
          ${OrderSellerFields}
        }
      }
    `

    return runQuery(query, rootValue).then(data => {
      expect(data!.order).toEqual(
        sampleOrder({
          fulfillments: true,
          includeCreditCard: true,
        })
      )
    })
  })
})
