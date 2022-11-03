import { useContext, useMemo } from "react"
import { ThemeContext } from "../context/theme"

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const isDark = useMemo(() => theme === "dark", [theme])

  function ToggleTheme() {
    setTheme(isDark ? "light" : "dark")
  }

  return { theme, setTheme, isDark, ToggleTheme }
}

export default useTheme
