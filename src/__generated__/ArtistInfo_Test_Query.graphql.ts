/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ArtistInfo_Test_QueryVariables = {};
export type ArtistInfo_Test_QueryResponse = {
    readonly artist: {
        readonly " $fragmentRefs": FragmentRefs<"ArtistInfo_artist">;
    } | null;
};
export type ArtistInfo_Test_QueryRawResponse = {
    readonly artist: ({
        readonly internalID: string;
        readonly slug: string;
        readonly name: string | null;
        readonly href: string | null;
        readonly image: ({
            readonly cropped: ({
                readonly url: string | null;
            }) | null;
        }) | null;
        readonly formatted_nationality_and_birthday: string | null;
        readonly counts: ({
            readonly partner_shows: number | null;
            readonly follows: number | null;
        }) | null;
        readonly exhibition_highlights: ReadonlyArray<({
            readonly partner: ({
                readonly __typename: "ExternalPartner";
                readonly id: string | null;
                readonly name: string | null;
            } | {
                readonly __typename: "Partner";
                readonly id: string | null;
                readonly name: string | null;
            } | {
                readonly __typename: string | null;
                readonly id: string | null;
            }) | null;
            readonly name: string | null;
            readonly start_at: string | null;
            readonly cover_image: ({
                readonly cropped: ({
                    readonly url: string | null;
                }) | null;
            }) | null;
            readonly city: string | null;
            readonly id: string | null;
        }) | null> | null;
        readonly collections: ReadonlyArray<string | null> | null;
        readonly highlights: ({
            readonly partnersConnection: ({
                readonly edges: ReadonlyArray<({
                    readonly node: ({
                        readonly __typename: "Partner";
                        readonly id: string | null;
                        readonly categories: ReadonlyArray<({
                            readonly slug: string;
                            readonly id: string | null;
                        }) | null> | null;
                    }) | null;
                    readonly id: string | null;
                }) | null> | null;
            }) | null;
        }) | null;
        readonly auctionResultsConnection: ({
            readonly edges: ReadonlyArray<({
                readonly node: ({
                    readonly __typename: "AuctionResult";
                    readonly id: string | null;
                    readonly price_realized: ({
                        readonly display: string | null;
                    }) | null;
                    readonly organization: string | null;
                    readonly sale_date: string | null;
                }) | null;
            }) | null> | null;
        }) | null;
        readonly biography_blurb: ({
            readonly text: string | null;
        }) | null;
        readonly id: string;
        readonly is_followed: boolean | null;
    }) | null;
};
export type ArtistInfo_Test_Query = {
    readonly response: ArtistInfo_Test_QueryResponse;
    readonly variables: ArtistInfo_Test_QueryVariables;
    readonly rawResponse: ArtistInfo_Test_QueryRawResponse;
};



/*
query ArtistInfo_Test_Query {
  artist(id: "banksy") {
    ...ArtistInfo_artist
    id
  }
}

fragment ArtistBio_bio on Artist {
  biography_blurb: biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
}

fragment ArtistInfo_artist on Artist {
  internalID
  slug
  name
  href
  image {
    cropped(width: 100, height: 100) {
      url
    }
  }
  formatted_nationality_and_birthday: formattedNationalityAndBirthday
  counts {
    partner_shows: partnerShows
  }
  exhibition_highlights: exhibitionHighlights(size: 3) {
    ...SelectedExhibitions_exhibitions
    id
  }
  collections
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          __typename
          id
        }
        id
      }
    }
  }
  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {
    edges {
      node {
        __typename
        id
      }
    }
  }
  ...ArtistBio_bio
  ...ArtistMarketInsights_artist
  ...FollowArtistButton_artist
  biography_blurb: biographyBlurb(format: HTML, partnerBio: true) {
    text
  }
}

fragment ArtistMarketInsights_artist on Artist {
  collections
  highlights {
    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: ["blue-chip", "top-established", "top-emerging"]) {
      edges {
        node {
          categories {
            slug
            id
          }
          id
        }
        id
      }
    }
  }
  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {
    edges {
      node {
        price_realized: priceRealized {
          display(format: "0a")
        }
        organization
        sale_date: saleDate(format: "YYYY")
        id
      }
    }
  }
}

fragment FollowArtistButton_artist on Artist {
  id
  internalID
  name
  is_followed: isFollowed
  counts {
    follows
  }
}

fragment SelectedExhibitions_exhibitions on Show {
  partner {
    __typename
    ... on ExternalPartner {
      name
      id
    }
    ... on Partner {
      name
    }
    ... on Node {
      id
    }
  }
  name
  start_at: startAt(format: "YYYY")
  cover_image: coverImage {
    cropped(width: 800, height: 600) {
      url
    }
  }
  city
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "id",
    "value": "banksy"
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "slug",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "url",
    "args": null,
    "storageKey": null
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = [
  (v2/*: any*/)
],
v7 = [
  {
    "kind": "Literal",
    "name": "format",
    "value": "YYYY"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ArtistInfo_Test_Query",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"banksy\")",
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ArtistInfo_artist",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ArtistInfo_Test_Query",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "artist",
        "storageKey": "artist(id:\"banksy\")",
        "args": (v0/*: any*/),
        "concreteType": "Artist",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "internalID",
            "args": null,
            "storageKey": null
          },
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "href",
            "args": null,
            "storageKey": null
          },
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
                "kind": "LinkedField",
                "alias": null,
                "name": "cropped",
                "storageKey": "cropped(height:100,width:100)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "height",
                    "value": 100
                  },
                  {
                    "kind": "Literal",
                    "name": "width",
                    "value": 100
                  }
                ],
                "concreteType": "CroppedImageUrl",
                "plural": false,
                "selections": (v3/*: any*/)
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": "formatted_nationality_and_birthday",
            "name": "formattedNationalityAndBirthday",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "counts",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistCounts",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": "partner_shows",
                "name": "partnerShows",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "follows",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "exhibition_highlights",
            "name": "exhibitionHighlights",
            "storageKey": "exhibitionHighlights(size:3)",
            "args": [
              {
                "kind": "Literal",
                "name": "size",
                "value": 3
              }
            ],
            "concreteType": "Show",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "partner",
                "storageKey": null,
                "args": null,
                "concreteType": null,
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "type": "ExternalPartner",
                    "selections": (v6/*: any*/)
                  },
                  {
                    "kind": "InlineFragment",
                    "type": "Partner",
                    "selections": (v6/*: any*/)
                  }
                ]
              },
              (v2/*: any*/),
              {
                "kind": "ScalarField",
                "alias": "start_at",
                "name": "startAt",
                "args": (v7/*: any*/),
                "storageKey": "startAt(format:\"YYYY\")"
              },
              {
                "kind": "LinkedField",
                "alias": "cover_image",
                "name": "coverImage",
                "storageKey": null,
                "args": null,
                "concreteType": "Image",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "cropped",
                    "storageKey": "cropped(height:600,width:800)",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "height",
                        "value": 600
                      },
                      {
                        "kind": "Literal",
                        "name": "width",
                        "value": 800
                      }
                    ],
                    "concreteType": "CroppedImageUrl",
                    "plural": false,
                    "selections": (v3/*: any*/)
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
                "args": null,
                "storageKey": null
              },
              (v5/*: any*/)
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "collections",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "highlights",
            "storageKey": null,
            "args": null,
            "concreteType": "ArtistHighlights",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "partnersConnection",
                "storageKey": "partnersConnection(displayOnPartnerProfile:true,first:10,partnerCategory:[\"blue-chip\",\"top-established\",\"top-emerging\"],representedBy:true)",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "displayOnPartnerProfile",
                    "value": true
                  },
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10
                  },
                  {
                    "kind": "Literal",
                    "name": "partnerCategory",
                    "value": [
                      "blue-chip",
                      "top-established",
                      "top-emerging"
                    ]
                  },
                  {
                    "kind": "Literal",
                    "name": "representedBy",
                    "value": true
                  }
                ],
                "concreteType": "PartnerArtistConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PartnerArtistEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Partner",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "categories",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "PartnerCategory",
                            "plural": true,
                            "selections": [
                              (v1/*: any*/),
                              (v5/*: any*/)
                            ]
                          }
                        ]
                      },
                      (v5/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "auctionResultsConnection",
            "storageKey": "auctionResultsConnection(first:1,recordsTrusted:true,sort:\"PRICE_AND_DATE_DESC\")",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              {
                "kind": "Literal",
                "name": "recordsTrusted",
                "value": true
              },
              {
                "kind": "Literal",
                "name": "sort",
                "value": "PRICE_AND_DATE_DESC"
              }
            ],
            "concreteType": "AuctionResultConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "AuctionResultEdge",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "node",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "AuctionResult",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v5/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "price_realized",
                        "name": "priceRealized",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AuctionResultPriceRealized",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "display",
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "format",
                                "value": "0a"
                              }
                            ],
                            "storageKey": "display(format:\"0a\")"
                          }
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "organization",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": "sale_date",
                        "name": "saleDate",
                        "args": (v7/*: any*/),
                        "storageKey": "saleDate(format:\"YYYY\")"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "biography_blurb",
            "name": "biographyBlurb",
            "storageKey": "biographyBlurb(format:\"HTML\",partnerBio:true)",
            "args": [
              {
                "kind": "Literal",
                "name": "format",
                "value": "HTML"
              },
              {
                "kind": "Literal",
                "name": "partnerBio",
                "value": true
              }
            ],
            "concreteType": "ArtistBlurb",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "text",
                "args": null,
                "storageKey": null
              }
            ]
          },
          (v5/*: any*/),
          {
            "kind": "ScalarField",
            "alias": "is_followed",
            "name": "isFollowed",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ArtistInfo_Test_Query",
    "id": null,
    "text": "query ArtistInfo_Test_Query {\n  artist(id: \"banksy\") {\n    ...ArtistInfo_artist\n    id\n  }\n}\n\nfragment ArtistBio_bio on Artist {\n  biography_blurb: biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n}\n\nfragment ArtistInfo_artist on Artist {\n  internalID\n  slug\n  name\n  href\n  image {\n    cropped(width: 100, height: 100) {\n      url\n    }\n  }\n  formatted_nationality_and_birthday: formattedNationalityAndBirthday\n  counts {\n    partner_shows: partnerShows\n  }\n  exhibition_highlights: exhibitionHighlights(size: 3) {\n    ...SelectedExhibitions_exhibitions\n    id\n  }\n  collections\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          __typename\n          id\n        }\n        id\n      }\n    }\n  }\n  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {\n    edges {\n      node {\n        __typename\n        id\n      }\n    }\n  }\n  ...ArtistBio_bio\n  ...ArtistMarketInsights_artist\n  ...FollowArtistButton_artist\n  biography_blurb: biographyBlurb(format: HTML, partnerBio: true) {\n    text\n  }\n}\n\nfragment ArtistMarketInsights_artist on Artist {\n  collections\n  highlights {\n    partnersConnection(first: 10, displayOnPartnerProfile: true, representedBy: true, partnerCategory: [\"blue-chip\", \"top-established\", \"top-emerging\"]) {\n      edges {\n        node {\n          categories {\n            slug\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n  auctionResultsConnection(recordsTrusted: true, first: 1, sort: PRICE_AND_DATE_DESC) {\n    edges {\n      node {\n        price_realized: priceRealized {\n          display(format: \"0a\")\n        }\n        organization\n        sale_date: saleDate(format: \"YYYY\")\n        id\n      }\n    }\n  }\n}\n\nfragment FollowArtistButton_artist on Artist {\n  id\n  internalID\n  name\n  is_followed: isFollowed\n  counts {\n    follows\n  }\n}\n\nfragment SelectedExhibitions_exhibitions on Show {\n  partner {\n    __typename\n    ... on ExternalPartner {\n      name\n      id\n    }\n    ... on Partner {\n      name\n    }\n    ... on Node {\n      id\n    }\n  }\n  name\n  start_at: startAt(format: \"YYYY\")\n  cover_image: coverImage {\n    cropped(width: 800, height: 600) {\n      url\n    }\n  }\n  city\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c949c558fa41a1e6dfee249dbb233c6b';
export default node;
