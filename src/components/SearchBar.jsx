import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="searchbar">
      <span className="searchbar__icon">🔍</span>
      <input
        className="searchbar__input"
        type="text"
        placeholder="Search by title, author, or file..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBar;
