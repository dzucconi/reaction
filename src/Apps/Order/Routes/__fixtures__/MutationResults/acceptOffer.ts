export const acceptOfferSuccess = {
  ecommerceBuyerAcceptOffer: {
    orderOrError: {
      order: {
        id: "1234",
      },
    },
  },
}
export const acceptOfferFailed = {
  ecommerceBuyerAcceptOffer: {
    orderOrError: {
      error: {
        type: "validation",
        code: "cannot_accept_offer",
        data: null,
      },
    },
  },
}
