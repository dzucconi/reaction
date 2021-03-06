/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ConsignRoute_Test_QueryVariables = {
    artistID: string;
};
export type ConsignRoute_Test_QueryResponse = {
    readonly artist: {
        readonly targetSupply: {
            readonly isInMicrofunnel: boolean | null;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"Consign_artist">;
    } | null;
};
export type ConsignRoute_Test_QueryRawResponse = {
    readonly artist: ({
        readonly name: string | null;
        readonly href: string | null;
        readonly targetSupply: ({
            readonly microfunnel: ({
                readonly artworks: ReadonlyArray<({
                    readonly artwork: ({
                        readonly image: ({
                            readonly imageURL: string | null;
                            readonly resized: ({
                                readonly width: number | null;
                                readonly height: number | null;
                                readonly url: string | null;
                            }) | null;
                            readonly url: string | null;
                            readonly aspect_ratio: number;
                        }) | null;
                        readonly id: string | null;
                        readonly href: string | null;
                        readonly title: string | null;
                        readonly date: string | null;
                        readonly sale_message: string | null;
                        readonly cultural_maker: string | null;
                        readonly artists: ReadonlyArray<({
                            readonly id: string;
                            readonly href: string | null;
                            readonly name: string | null;
                        }) | null> | null;
                        readonly collecting_institution: string | null;
                        readonly partner: ({
                            readonly name: string | null;
                            readonly href: string | null;
                            readonly id: string | null;
                            readonly type: string | null;
                        }) | null;
                        readonly sale: ({
                            readonly is_auction: boolean | null;
                            readonly is_closed: boolean | null;
                            readonly id: string | null;
                            readonly is_live_open: boolean | null;
                            readonly is_open: boolean | null;
                            readonly is_preview: boolean | null;
                            readonly display_timely_at: string | null;
                        }) | null;
                        readonly sale_artwork: ({
                            readonly counts: ({
                                readonly bidder_positions: number | null;
                            }) | null;
                            readonly highest_bid: ({
                                readonly display: string | null;
                            }) | null;
                            readonly opening_bid: ({
                                readonly display: string | null;
                            }) | null;
                            readonly id: string | null;
                        }) | null;
                        readonly is_inquireable: boolean | null;
                        readonly internalID: string;
                        readonly slug: string;
                        readonly is_saved: boolean | null;
                        readonly is_biddable: boolean | null;
                        readonly is_acquireable: boolean | null;
                        readonly is_offerable: boolean | null;
                    }) | null;
                }) | null> | null;
                readonly randomArtworks: ReadonlyArray<({
                    readonly artwork: ({
                        readonly image: ({
                            readonly aspectRatio: number;
                            readonly width: number | null;
                            readonly height: number | null;
                            readonly url: string | null;
                            readonly aspect_ratio: number;
                        }) | null;
                        readonly href: string | null;
                        readonly title: string | null;
                        readonly date: string | null;
                        readonly sale_message: string | null;
                        readonly cultural_maker: string | null;
                        readonly artists: ReadonlyArray<({
                            readonly id: string;
                            readonly href: string | null;
                            readonly name: string | null;
                        }) | null> | null;
                        readonly collecting_institution: string | null;
                        readonly partner: ({
                            readonly name: string | null;
                            readonly href: string | null;
                            readonly id: string | null;
                            readonly type: string | null;
                        }) | null;
                        readonly sale: ({
                            readonly is_auction: boolean | null;
                            readonly is_closed: boolean | null;
                            readonly id: string | null;
                            readonly is_live_open: boolean | null;
                            readonly is_open: boolean | null;
                            readonly is_preview: boolean | null;
                            readonly display_timely_at: string | null;
                        }) | null;
                        readonly sale_artwork: ({
                            readonly counts: ({
                                readonly bidder_positions: number | null;
                            }) | null;
                            readonly highest_bid: ({
                                readonly display: string | null;
                            }) | null;
                            readonly opening_bid: ({
                                readonly display: string | null;
                            }) | null;
                            readonly id: string | null;
                        }) | null;
                        readonly is_inquireable: boolean | null;
                        readonly id: string;
                        readonly internalID: string;
                        readonly slug: string;
                        readonly is_saved: boolean | null;
                        readonly is_biddable: boolean | null;
                        readonly is_acquireable: boolean | null;
                        readonly is_offerable: boolean | null;
                    }) | null;
                    readonly realizedPrice: string | null;
                }) | null> | null;
                readonly metadata: ({
                    readonly roundedViews: string | null;
                    readonly roundedUniqueVisitors: string | null;
                    readonly highestRealized: string | null;
                    readonly str: string | null;
                    readonly realized: string | null;
                }) | null;
            }) | null;
            readonly isInMicrofunnel: boolean | null;
        }) | null;
        readonly id: string | null;
    }) | null;
};
export type ConsignRoute_Test_Query = {
    readonly response: ConsignRoute_Test_QueryResponse;
    readonly variables: ConsignRoute_Test_QueryVariables;
    readonly rawResponse: ConsignRoute_Test_QueryRawResponse;
};



/*
query ConsignRoute_Test_Query(
  $artistID: String!
) {
  artist(id: $artistID) {
    ...Consign_artist
    targetSupply {
      isInMicrofunnel
    }
    id
  }
}

fragment ArtistConsignHeaderImages_artist on Artist {
  targetSupply {
    microfunnel {
      artworks {
        artwork {
          image {
            resized(height: 395) {
              width
              height
              url
            }
          }
          ...FillwidthItem_artwork
          id
        }
      }
    }
  }
}

fragment ArtistConsignHeader_artist on Artist {
  ...ArtistConsignHeaderImages_artist
  name
}

fragment ArtistConsignMarketTrends_artist on Artist {
  href
  targetSupply {
    microfunnel {
      metadata {
        highestRealized
        str
        realized
      }
    }
  }
}

fragment ArtistConsignMeta_artist on Artist {
  name
  href
  targetSupply {
    microfunnel {
      artworks {
        artwork {
          image {
            imageURL: url(version: "medium")
          }
          id
        }
      }
    }
  }
}

fragment ArtistConsignPageViews_artist on Artist {
  name
  targetSupply {
    microfunnel {
      metadata {
        roundedViews
        roundedUniqueVisitors
      }
    }
  }
}

fragment ArtistConsignRecentlySold_artist on Artist {
  targetSupply {
    microfunnel {
      randomArtworks: artworks(randomize: true) {
        artwork {
          image {
            aspectRatio
            width
            height
          }
          ...FillwidthItem_artwork
          id
        }
        realizedPrice
      }
    }
  }
  name
}

fragment Badge_artwork on Artwork {
  is_biddable: isBiddable
  is_acquireable: isAcquireable
  is_offerable: isOfferable
  href
  sale {
    is_preview: isPreview
    display_timely_at: displayTimelyAt
    id
  }
}

fragment Consign_artist on Artist {
  ...ArtistConsignMeta_artist
  ...ArtistConsignHeader_artist
  ...ArtistConsignRecentlySold_artist
  ...ArtistConsignPageViews_artist
  ...ArtistConsignMarketTrends_artist
}

fragment Contact_artwork on Artwork {
  href
  is_inquireable: isInquireable
  sale {
    is_auction: isAuction
    is_live_open: isLiveOpen
    is_open: isOpen
    is_closed: isClosed
    id
  }
  partner(shallow: true) {
    type
    id
  }
  sale_artwork: saleArtwork {
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    counts {
      bidder_positions: bidderPositions
    }
    id
  }
}

fragment Details_artwork on Artwork {
  href
  title
  date
  sale_message: saleMessage
  cultural_maker: culturalMaker
  artists(shallow: true) {
    id
    href
    name
  }
  collecting_institution: collectingInstitution
  partner(shallow: true) {
    name
    href
    id
  }
  sale {
    is_auction: isAuction
    is_closed: isClosed
    id
  }
  sale_artwork: saleArtwork {
    counts {
      bidder_positions: bidderPositions
    }
    highest_bid: highestBid {
      display
    }
    opening_bid: openingBid {
      display
    }
    id
  }
}

fragment FillwidthItem_artwork on Artwork {
  image {
    url(version: "large")
    aspect_ratio: aspectRatio
  }
  href
  ...Metadata_artwork
  ...Save_artwork
  ...Badge_artwork
}

fragment Metadata_artwork on Artwork {
  ...Details_artwork
  ...Contact_artwork
  href
}

fragment Save_artwork on Artwork {
  id
  internalID
  slug
  is_saved: isSaved
  title
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "artistID",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "artistID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isInMicrofunnel",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "href",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "width",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "height",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "url",
  "args": [
    {
      "kind": "Literal",
      "name": "version",
      "value": "large"
    }
  ],
  "storageKey": "url(version:\"large\")"
},
v8 = {
  "kind": "ScalarField",
  "alias": "aspect_ratio",
  "name": "aspectRatio",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "date",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": "sale_message",
  "name": "saleMessage",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": "cultural_maker",
  "name": "culturalMaker",
  "args": null,
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "shallow",
    "value": true
  }
],
v15 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "artists",
  "storageKey": "artists(shallow:true)",
  "args": (v14/*: any*/),
  "concreteType": "Artist",
  "plural": true,
  "selections": [
    (v9/*: any*/),
    (v4/*: any*/),
    (v3/*: any*/)
  ]
},
v16 = {
  "kind": "ScalarField",
  "alias": "collecting_institution",
  "name": "collectingInstitution",
  "args": null,
  "storageKey": null
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "partner",
  "storageKey": "partner(shallow:true)",
  "args": (v14/*: any*/),
  "concreteType": "Partner",
  "plural": false,
  "selections": [
    (v3/*: any*/),
    (v4/*: any*/),
    (v9/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
},
v18 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "sale",
  "storageKey": null,
  "args": null,
  "concreteType": "Sale",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": "is_auction",
      "name": "isAuction",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "is_closed",
      "name": "isClosed",
      "args": null,
      "storageKey": null
    },
    (v9/*: any*/),
    {
      "kind": "ScalarField",
      "alias": "is_live_open",
      "name": "isLiveOpen",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "is_open",
      "name": "isOpen",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "is_preview",
      "name": "isPreview",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": "display_timely_at",
      "name": "displayTimelyAt",
      "args": null,
      "storageKey": null
    }
  ]
},
v19 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "display",
    "args": null,
    "storageKey": null
  }
],
v20 = {
  "kind": "LinkedField",
  "alias": "sale_artwork",
  "name": "saleArtwork",
  "storageKey": null,
  "args": null,
  "concreteType": "SaleArtwork",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "counts",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkCounts",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": "bidder_positions",
          "name": "bidderPositions",
          "args": null,
          "storageKey": null
        }
      ]
    },
    {
      "kind": "LinkedField",
      "alias": "highest_bid",
      "name": "highestBid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkHighestBid",
      "plural": false,
      "selections": (v19/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": "opening_bid",
      "name": "openingBid",
      "storageKey": null,
      "args": null,
      "concreteType": "SaleArtworkOpeningBid",
      "plural": false,
      "selections": (v19/*: any*/)
    },
    (v9/*: any*/)
  ]
},
v21 = {
  "kind": "ScalarField",
  "alias": "is_inquireable",
  "name": "isInquireable",
  "args": null,
  "storageKey": null
},
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "internalID",
  "args": null,
  "storageKey": null
},
v23 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v24 = {
  "kind": "ScalarField",
  "alias": "is_saved",
  "name": "isSaved",
  "args": null,
  "storageKey": null
},
v25 = {
  "kind": "ScalarField",
  "alias": "is_biddable",
  "name": "isBiddable",
  "args": null,
  "storageKey": null
},
v26 = {
  "kind": "ScalarField",
  "alias": "is_acquireable",
  "name": "isAcquireable",
  "args": null,
  "storageKey": null
},
v27 = {
  "kind": "ScalarField",
  "alias": "is_offerable",
  "name": "isOfferable",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ConsignRoute_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "targetSupply",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistTargetSupply",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "Consign_artist",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ConsignRoute_Test_Query",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "targetSupply",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistTargetSupply",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "microfunnel",
                "storageKey": null,
                "args": null,
                "concreteType": "ArtistTargetSupplyMicrofunnel",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artworks",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistTargetSupplyMicrofunnelArtwork",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": "imageURL",
                                "name": "url",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "version",
                                    "value": "medium"
                                  }
                                ],
                                "storageKey": "url(version:\"medium\")"
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "resized",
                                "storageKey": "resized(height:395)",
                                "args": [
                                  {
                                    "kind": "Literal",
                                    "name": "height",
                                    "value": 395
                                  }
                                ],
                                "concreteType": "ResizedImageUrl",
                                "plural": false,
                                "selections": [
                                  (v5/*: any*/),
                                  (v6/*: any*/),
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "name": "url",
                                    "args": null,
                                    "storageKey": null
                                  }
                                ]
                              },
                              (v7/*: any*/),
                              (v8/*: any*/)
                            ]
                          },
                          (v9/*: any*/),
                          (v4/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/)
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "randomArtworks",
                    "name": "artworks",
                    "storageKey": "artworks(randomize:true)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "randomize",
                        "value": true
                      }
                    ],
                    "concreteType": "ArtistTargetSupplyMicrofunnelArtwork",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "artwork",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Artwork",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "image",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Image",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "aspectRatio",
                                "args": null,
                                "storageKey": null
                              },
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/)
                            ]
                          },
                          (v4/*: any*/),
                          (v10/*: any*/),
                          (v11/*: any*/),
                          (v12/*: any*/),
                          (v13/*: any*/),
                          (v15/*: any*/),
                          (v16/*: any*/),
                          (v17/*: any*/),
                          (v18/*: any*/),
                          (v20/*: any*/),
                          (v21/*: any*/),
                          (v9/*: any*/),
                          (v22/*: any*/),
                          (v23/*: any*/),
                          (v24/*: any*/),
                          (v25/*: any*/),
                          (v26/*: any*/),
                          (v27/*: any*/)
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "realizedPrice",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "metadata",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "ArtistTargetSupplyMicrofunnelMetadata",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "roundedViews",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "roundedUniqueVisitors",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "highestRealized",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "str",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "realized",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              (v2/*: any*/)
            ]
          },
          (v9/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ConsignRoute_Test_Query",
    "id": null,
    "text": "query ConsignRoute_Test_Query(\n  $artistID: String!\n) {\n  artist(id: $artistID) {\n    ...Consign_artist\n    targetSupply {\n      isInMicrofunnel\n    }\n    id\n  }\n}\n\nfragment ArtistConsignHeaderImages_artist on Artist {\n  targetSupply {\n    microfunnel {\n      artworks {\n        artwork {\n          image {\n            resized(height: 395) {\n              width\n              height\n              url\n            }\n          }\n          ...FillwidthItem_artwork\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ArtistConsignHeader_artist on Artist {\n  ...ArtistConsignHeaderImages_artist\n  name\n}\n\nfragment ArtistConsignMarketTrends_artist on Artist {\n  href\n  targetSupply {\n    microfunnel {\n      metadata {\n        highestRealized\n        str\n        realized\n      }\n    }\n  }\n}\n\nfragment ArtistConsignMeta_artist on Artist {\n  name\n  href\n  targetSupply {\n    microfunnel {\n      artworks {\n        artwork {\n          image {\n            imageURL: url(version: \"medium\")\n          }\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ArtistConsignPageViews_artist on Artist {\n  name\n  targetSupply {\n    microfunnel {\n      metadata {\n        roundedViews\n        roundedUniqueVisitors\n      }\n    }\n  }\n}\n\nfragment ArtistConsignRecentlySold_artist on Artist {\n  targetSupply {\n    microfunnel {\n      randomArtworks: artworks(randomize: true) {\n        artwork {\n          image {\n            aspectRatio\n            width\n            height\n          }\n          ...FillwidthItem_artwork\n          id\n        }\n        realizedPrice\n      }\n    }\n  }\n  name\n}\n\nfragment Badge_artwork on Artwork {\n  is_biddable: isBiddable\n  is_acquireable: isAcquireable\n  is_offerable: isOfferable\n  href\n  sale {\n    is_preview: isPreview\n    display_timely_at: displayTimelyAt\n    id\n  }\n}\n\nfragment Consign_artist on Artist {\n  ...ArtistConsignMeta_artist\n  ...ArtistConsignHeader_artist\n  ...ArtistConsignRecentlySold_artist\n  ...ArtistConsignPageViews_artist\n  ...ArtistConsignMarketTrends_artist\n}\n\nfragment Contact_artwork on Artwork {\n  href\n  is_inquireable: isInquireable\n  sale {\n    is_auction: isAuction\n    is_live_open: isLiveOpen\n    is_open: isOpen\n    is_closed: isClosed\n    id\n  }\n  partner(shallow: true) {\n    type\n    id\n  }\n  sale_artwork: saleArtwork {\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    counts {\n      bidder_positions: bidderPositions\n    }\n    id\n  }\n}\n\nfragment Details_artwork on Artwork {\n  href\n  title\n  date\n  sale_message: saleMessage\n  cultural_maker: culturalMaker\n  artists(shallow: true) {\n    id\n    href\n    name\n  }\n  collecting_institution: collectingInstitution\n  partner(shallow: true) {\n    name\n    href\n    id\n  }\n  sale {\n    is_auction: isAuction\n    is_closed: isClosed\n    id\n  }\n  sale_artwork: saleArtwork {\n    counts {\n      bidder_positions: bidderPositions\n    }\n    highest_bid: highestBid {\n      display\n    }\n    opening_bid: openingBid {\n      display\n    }\n    id\n  }\n}\n\nfragment FillwidthItem_artwork on Artwork {\n  image {\n    url(version: \"large\")\n    aspect_ratio: aspectRatio\n  }\n  href\n  ...Metadata_artwork\n  ...Save_artwork\n  ...Badge_artwork\n}\n\nfragment Metadata_artwork on Artwork {\n  ...Details_artwork\n  ...Contact_artwork\n  href\n}\n\nfragment Save_artwork on Artwork {\n  id\n  internalID\n  slug\n  is_saved: isSaved\n  title\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a33f6eb2c6dcb855a3f59256719bce01';
export default node;
