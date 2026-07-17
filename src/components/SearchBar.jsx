import { Search, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="flex items-center gap-4 w-full">

      {/* Search Input */}
      <div className="relative flex-1">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="
            w-full
            rounded-2xl
            border
            border-sky-200
            bg-white
            py-3
            pl-12
            pr-12
            shadow-md
            focus:outline-none
            focus:ring-2
            focus:ring-sky-400
            transition
          "
        />

        {value && (
          <button
            type="button"
            onClick={() =>
              onChange({
                target: { value: "" },
              })
            }
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X
              size={18}
              className="text-slate-400 hover:text-red-500"
            />
          </button>
        )}

      </div>

      {/* Theme Toggle */}
      <ThemeToggle />

    </div>
  );
}

export default SearchBar;