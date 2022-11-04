import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Button from "@mui/material/Button"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { navigate } from "gatsby"

const theme = createTheme({
  palette: {
    notChecked: {
      main: "#8285f4",
    },
    checked: {
      main: "#8285f4",
      contrastText: "#fff",
    },
  },
})

const TagButtonList = ({ checkedName = "All" }) => {
  const result = useStaticQuery(graphql`
    query {
      allDirectory(filter: { relativeDirectory: { eq: "" } }) {
        nodes {
          name
        }
      }
    }
  `)

  const tags = [{ name: "All" }, ...result.allDirectory.nodes]

  const handleClick = (isChecked, tagName) => {
    if (isChecked) return
    const toLoc = tagName === "All" ? "/blog" : "/blog/" + tagName
    navigate(toLoc)
  }

  return (
    <div className="flex space-x-2">
      <ThemeProvider theme={theme}>
        {tags.map(tag => {
          const isChecked = checkedName === tag.name
          return (
            <Button
              variant={isChecked ? "contained" : "outlined"}
              key={`tag-button-${tag.name}`}
              color={isChecked ? "checked" : "notChecked"}
              onClick={() => handleClick(isChecked, tag.name)}
            >
              {tag.name}
            </Button>
          )
        })}
      </ThemeProvider>
    </div>
  )
}

export default TagButtonList
