import React, { useState, useEffect, useRef } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");
  const debounceTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    if (debounceTimeout.current) clearTimeout(debounceTimeout.current);

    debounceTimeout.current = setTimeout(() => {
      onSearch(inputValue.trim());
    }, 500);

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [inputValue, onSearch]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="🔍 Search for a movie..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
