import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql"
import { connectionFromArraySlice } from "graphql-relay"
import { convertConnectionArgsToGravityArgs } from "lib/helpers"
import { totalViaLoader } from "lib/total"
import { omit } from "lodash"
import moment from "moment"
import { pageable } from "relay-cursor-paging"
import cached from "./fields/cached"
import date from "./fields/date"
import Image from "./image"
import Location from "./location"
import { GravityIDFields } from "./object_identification"
import Profile from "./profile"
import { showConnection } from "./show"
import ShowSort from "./sorts/show_sort"

const FairOrganizerType = new GraphQLObjectType({
  name: "organizer",
  fields: {
    profile_id: {
      type: GraphQLID,
    },
    profile: {
      type: Profile.type,
      resolve: (
        { profile_id },
        _options,
        _request,
        { rootValue: { profileLoader } }
      ) => {
        return profileLoader(profile_id).catch(() => null)
      },
    },
  },
})

const FairType = new GraphQLObjectType({
  name: "Fair",
  fields: () => ({
    ...GravityIDFields,
    cached,
    banner_size: {
      type: GraphQLString,
    },
    has_full_feature: {
      type: GraphQLBoolean,
    },
    has_homepage_section: {
      type: GraphQLBoolean,
    },
    has_large_banner: {
      type: GraphQLBoolean,
    },
    has_listing: {
      type: GraphQLBoolean,
    },
    href: {
      type: GraphQLString,
      resolve: ({ default_profile_id, organizer }) => {
        const id = default_profile_id || (organizer && organizer.profile_id)
        return `/${id}`
      },
    },
    image: Image,
    is_active: {
      type: GraphQLBoolean,
      description: "Are we currently in the fair's active period?",
      resolve: ({ autopublish_artworks_at, end_at }) => {
        const start = moment.utc(autopublish_artworks_at).subtract(7, "days")
        const end = moment.utc(end_at).add(14, "days")
        return moment.utc().isBetween(start, end)
      },
    },
    mobile_image: {
      /**
       * cannot use Image normalizer because it will grab other image versions; mobile icon is expected to be correctly
       * sized
       */
      type: Image.type,
    },
    is_published: {
      type: GraphQLBoolean,
      resolve: ({ published }) => published,
    },
    location: {
      type: Location.type,
      resolve: (
        { id, location, published },
        options,
        _request,
        { rootValue: { fairLoader } }
      ) => {
        if (location) {
          return location
        } else if (published) {
          return fairLoader(id, options).then(fair => {
            return fair.location
          })
        }
        return null
      },
    },
    name: {
      type: GraphQLString,
    },
    profile: {
      type: Profile.type,
      resolve: (
        { default_profile_id, organizer },
        _options,
        _request,
        { rootValue: { profileLoader } }
      ) => {
        const id = default_profile_id || (organizer && organizer.profile_id)
        return (
          profileLoader(id)
            // Some profiles are private and return 403
            .catch(() => null)
        )
      },
    },
    shows_connection: {
      type: showConnection,
      args: pageable({
        section: {
          type: GraphQLString,
          description: "Number of artworks to return",
        },
        sort: {
          type: ShowSort,
          description: "Sorts for shows in a fair",
        },
      }),
      resolve: (
        { id },
        options,
        _request,
        { rootValue: { fairBoothsLoader } }
      ) => {
        const gravityOptions = omit(
          convertConnectionArgsToGravityArgs(options),
          ["page"]
        )
        gravityOptions.sort = gravityOptions.sort || "-featured"

        return Promise.all([
          totalViaLoader(fairBoothsLoader, id, gravityOptions),
          fairBoothsLoader(id, gravityOptions),
        ]).then(([count, { body: { results } }]) => {
          return connectionFromArraySlice(results, options, {
            arrayLength: count,
            sliceStart: gravityOptions.offset,
          })
        })
      },
    },
    start_at: date,
    end_at: date,
    organizer: {
      type: FairOrganizerType,
    },
    published: {
      type: GraphQLBoolean,
      deprecationReason: "Prefix Boolean returning fields with `is_`",
    },
    tagline: {
      type: GraphQLString,
    },
  }),
})

const Fair = {
  type: FairType,
  description: "A Fair",
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: "The slug or ID of the Fair",
    },
  },
  resolve: (_root, { id }, _request, { rootValue: { fairLoader } }) => {
    return fairLoader(id)
  },
}

export default Fair
