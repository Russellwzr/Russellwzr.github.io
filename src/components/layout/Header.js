import React from "react"
import { Link } from "gatsby"
import { StyledNav, StyledHeader } from "./styles"
import ThemeToggle from "./ThemeToggle"

const Header = () => {
  return (
    <StyledHeader>
      <StyledNav aria-label="Main Navigation">
        <Link to="/" className="logo"></Link>
        <Link to="/">home</Link>
        <Link to="/blog">blog</Link>
      </StyledNav>
      <ThemeToggle />
    </StyledHeader>
  )
}

export default Header
