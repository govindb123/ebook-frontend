import { useEffect, useState } from "react";
import { getEbooks } from "../api/ebookApi";
import BookCard from "../components/BookCard";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";
import UploadModal from "../components/UploadModal";
import SearchBar from "../components/SearchBar";
import { searchEbooks } from "../api/ebookApi";
import { deleteEbook } from "../api/ebookApi";

function Library() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEbooks();
  }, []);

  const fetchEbooks = async () => {
    try {
      const response = await getEbooks();
      setEbooks(response.data.data);
    } catch (error) {
      console.error("Error fetching ebooks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      if (!query.trim()) {
        fetchEbooks();
        return;
      }

      const response = await searchEbooks(query);
      setEbooks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this ebook?"
    );

    if (!confirmed) return;

    try {
      await deleteEbook(id);
      fetchEbooks();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Digital Ebook Library</h1>

      <UploadModal fetchEbooks={fetchEbooks} />
      <SearchBar onSearch={handleSearch} />

      <hr />

      {ebooks.length === 0 ? (
        <EmptyState />
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {ebooks.map((ebook) => (
            <BookCard key={ebook.id} ebook={ebook} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;