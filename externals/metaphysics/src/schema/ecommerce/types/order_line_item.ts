import {
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLString,
} from "graphql"
import { connectionDefinitions } from "graphql-relay"
import Artwork from "schema/artwork"
import date from "schema/fields/date"
import { amount } from "schema/fields/money"
import { ArtworkVersion } from "../../artwork_version"
import { OrderFulfillmentConnection } from "./order_fulfillment"

export const OrderLineItemType = new GraphQLObjectType({
  name: "OrderLineItem",
  fields: () => ({
    id: {
      type: GraphQLID,
      description: "ID of the order line item",
    },
    artwork: {
      type: Artwork.type,
      description: "Artwork that is being ordered",
      resolve: (
        { artworkId },
        _args,
        _context,
        { rootValue: { authenticatedArtworkLoader } }
      ) => authenticatedArtworkLoader(artworkId),
    },
    artworkVersion: {
      type: ArtworkVersion,
      description: "Artwork version that is being ordered",

      resolve: (
        { artworkVersionId },
        _args,
        _context,
        { rootValue: { authenticatedArtworkVersionLoader } }
      ) => authenticatedArtworkVersionLoader(artworkVersionId),
    },
    editionSetId: {
      type: GraphQLString,
      description: "ID of the selected Edition set from the artwork",
    },
    priceCents: {
      type: GraphQLInt,
      description: "Unit price in cents",
    },
    price: amount(({ priceCents }) => priceCents),
    updatedAt: date,
    createdAt: date,
    quantity: {
      type: GraphQLInt,
      description: "Quantity of items in this line item",
    },
    fulfillments: {
      type: OrderFulfillmentConnection,
      description: "List of order line items",
    },
  }),
})

export const {
  connectionType: OrderLineItemConnection,
  edgeType: OrderLineItemEdge,
} = connectionDefinitions({
  nodeType: OrderLineItemType,
})
