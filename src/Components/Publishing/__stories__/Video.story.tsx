import { storiesOf } from "@storybook/react"
import * as React from "react"

import Video from "../Sections/Video"

import { Videos } from "../Fixtures/Components"

storiesOf("Publishing/Video", module)
  .add("Youtube Video", () => {
    return (
      <div style={{ width: "100vw", position: "relative" }}>
        <Video section={Videos[0]} layout="standard" />
      </div>
    )
  })
  .add("Vimeo Video", () => {
    return (
      <div style={{ width: "100vw", position: "relative" }}>
        <Video section={Videos[1]} layout="standard" />
      </div>
    )
  })
  .add("Coverless Video", () => {
    return (
      <div style={{ width: "100vw", position: "relative" }}>
        <Video section={Videos[2]} layout="classic" />
      </div>
    )
  })
