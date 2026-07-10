import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search by title, author, or file..."
        value={query}
        onChange={handleChange}
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
}

export default SearchBar;