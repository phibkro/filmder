import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themeProvider";

interface Props {
  iconSize?: string;
}
export default function ThemeToggle({ iconSize = "24px" }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* TODO: make button find the opposite of system theme */}
      {theme === "dark" && (
        <button onClick={() => setTheme("light")}>
          <Sun size={iconSize} />
        </button>
      )}
      {theme === "light" && (
        <button onClick={() => setTheme("dark")}>
          <Moon size={iconSize} color="black" />
        </button>
      )}
    </>
  );
}
