import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

export default function useTheme() {
  const [theme, setTheme] = useLocalStorage("theme", "light")

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return [theme, setTheme]
}
