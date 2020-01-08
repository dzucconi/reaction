import { Box } from "@artsy/palette"
import { OrderApp_order } from "__generated__/OrderApp_order.graphql"
import { AppContainer } from "Apps/Components/AppContainer"
import { StickyFooter } from "Apps/Order/Components/StickyFooter"
import { Mediator, SystemContextConsumer } from "Artsy"
import { ErrorPage } from "Components/ErrorPage"
import { Match, RouterState, withRouter } from "found"
import React from "react"
import { Meta, Title } from "react-head"
import { graphql } from "react-relay"
import { Elements, StripeProvider } from "react-stripe-elements"
import styled from "styled-components"
import { get } from "Utils/get"

declare global {
  interface Window {
    sd: {
      CURRENT_USER: {
        id: string
      }
    }
  }
}

const findCurrentRoute = ({ routes, routeIndices }: Match) => {
  let currentRoute = routes[routeIndices[0]]
  routeIndices.slice(1).forEach(routeIndex => {
    currentRoute = currentRoute.children[routeIndex]
  })
  return currentRoute
}

export interface PurchaseAppProps extends RouterState {
  orders: PurchaseApp_orders
}

class PurchaseApp extends React.Component<PurchaseAppProps, {}> {
  mediator: Mediator | null = null

  render() {
    const { orders } = this.props

    return (
      <SystemContextConsumer>
        {({ isEigen, mediator }) => {
          this.mediator = mediator
          return (
            <AppContainer>
              <Title>My Orders | Artsy</Title>
              {isEigen ? (
                <Meta
                  name="viewport"
                  content="width=device-width, user-scalable=no"
                />
              ) : (
                <Meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=5 viewport-fit=cover"
                />
              )}
              <SafeAreaContainer>
                <Elements>
                  <>HELLO WORLD</>
                  <>{orders}</>
                </Elements>
              </SafeAreaContainer>
            </AppContainer>
          )
        }}
      </SystemContextConsumer>
    )
  }
}

const PurchaseAppWithRouter = withRouter(PurchaseApp)

export { PurchaseAppWithRouter as PurchaseApp }

const SafeAreaContainer = styled(Box)`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  margin-bottom: 75px;
`

graphql`
  fragment PurchaseApp_orders on CommerceOrderConnectionWithTotalCount {
    edges {
      node {
        internalID
        state
        buyerTotal
        lineItems {
          edges {
            node {
              artwork {
                image {
                  url
                }
                internalID
                title
                artist {
                  name
                }
                partner {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`
