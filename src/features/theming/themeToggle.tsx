import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themeProvider";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* TODO: make button find the opposite of system theme */}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      )}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <Moon color="black" />
        </button>
      )}
    </>
  );
}
