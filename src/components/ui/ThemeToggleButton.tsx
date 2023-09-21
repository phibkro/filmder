import { useTheme } from "@/features/themeProvider";
import { Moon, Sun } from "lucide-react";

interface Props {
  iconSize?: string;
}
export default function ThemeToggleButton({ iconSize = "24px" }: Props) {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* TODO: make button find the opposite of system theme */}
      {theme === "dark" && (
        <button
          className="theme-toggle-button"
          onClick={() => setTheme("light")}
        >
          <Sun size={iconSize} />
        </button>
      )}
      {theme === "light" && (
        <button
          className="theme-toggle-button"
          onClick={() => setTheme("dark")}
        >
          <Moon size={iconSize} color="black" />
        </button>
      )}
    </>
  );
}
