import "jest-styled-components"
import * as React from "react"
import * as renderer from "react-test-renderer"
import { RelatedCanvas } from "../../Fixtures/Components"
import RelatedArticlesCanvas from "../RelatedArticlesCanvas"

it("renders the related articles canvas", () => {
  const related = renderer
    .create(<RelatedArticlesCanvas vertical={{ name: "Art Market" }} articles={RelatedCanvas} />)
    .toJSON()
  expect(related).toMatchSnapshot()
})
