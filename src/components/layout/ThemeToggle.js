import React from "react"
import { StyledToggle } from "./styles"
import useTheme from "../../hooks/useTheme"

export default function ThemeToggle() {
  const { isDark, setTheme } = useTheme()

  function handleToggle(e) {
    const newTheme = e.target.checked ? "dark" : "light"
    setTheme(newTheme)
  }

  return (
    <StyledToggle htmlFor="toggle">
      <input
        type="checkbox"
        id="toggle"
        aria-label="Switch between Dark and Light mode"
        checked={isDark}
        onChange={handleToggle}
      />
      <span />
      {isDark ? "Dark Mode" : "Light Mode"}
    </StyledToggle>
  )
}
