import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="
        p-3
        rounded-full
        bg-white
        dark:bg-slate-800
        shadow-md
        border
        border-sky-200
        dark:border-slate-600
        hover:scale-110
        transition
      "
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-sky-600" size={20} />
      )}
    </button>
  );
}

export default ThemeToggle;