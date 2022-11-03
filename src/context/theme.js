import React, { useState, useEffect, createContext } from "react"

function getInitialTheme() {
  if (typeof window !== "undefined" && window.localStorage) {
    if ("theme" in window.localStorage)
      return window.localStorage.getItem("theme")

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark"
  }
  return "light"
}

const ThemeContext = createContext()

const ThemeProvider = ({ initialTheme, children }) => {
  const [theme, setTheme] = useState(getInitialTheme)

  function setRootTheme(t) {
    const { classList } = window.document.documentElement
    const isDark = t === "dark"

    classList.remove(isDark ? "light" : "dark")
    classList.add(t)

    localStorage.setItem("theme", t)
  }

  if (initialTheme) setRootTheme(initialTheme)

  useEffect(() => {
    setRootTheme(theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
