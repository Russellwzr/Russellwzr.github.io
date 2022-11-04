import React from "react"
import { Link } from "gatsby"
import { StyledNav, StyledHeader } from "./styles"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  const addLine = {
    home: "",
    blog: "",
  }
  if (typeof window !== "undefined") {
    const pathLoc = window.location.pathname
    if (pathLoc?.length <= 1) addLine.home = "add-line"
    if (pathLoc.indexOf("/blog") === 0) addLine.blog = "add-line"
  }

  return (
    <StyledHeader>
      <StyledNav aria-label="Main Navigation">
        <Link to="/" className="logo"></Link>
        <Link to="/" className={addLine.home}>
          home
        </Link>
        <Link to="/blog" className={addLine.blog}>
          blog
        </Link>
      </StyledNav>
      <ThemeToggle />
    </StyledHeader>
  )
}

export default Header
