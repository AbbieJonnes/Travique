import { Search, X } from "lucide-react";

function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}) {
  return (
    <div className="relative w-full">

      {/* Search Icon */}
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-gray-300
          bg-white
          py-3
          pl-12
          pr-12
          text-gray-700
          shadow-sm
          transition
          duration-300
          focus:border-blue-500
          focus:outline-none
          focus:ring-2
          focus:ring-blue-200
        "
      />

      {/* Clear Button */}
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
            className="text-gray-400 hover:text-red-500 transition"
          />
        </button>
      )}
    </div>
  );
}

export default SearchBar;