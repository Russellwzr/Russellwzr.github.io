import React from "react"
import { ThemeProvider } from "./src/context/theme"
// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "./src/style.css"
// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "@fontsource/open-sans/300.css"
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "@arco-design/web-react/dist/css/arco.css"

import "katex/dist/katex.min.css"

config.autoAddCss = false

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
)
