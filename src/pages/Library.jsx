import { useEffect, useState } from "react";
import { getEbooks, searchEbooks, deleteEbook } from "../api/ebookApi";
import BookCard from "../components/BookCard";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";
import UploadModal from "../components/UploadModal";
import SearchBar from "../components/SearchBar";
import "./Library.css";

function Library() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchEbooks(); }, []);

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
      if (!query.trim()) { fetchEbooks(); return; }
      const response = await searchEbooks(query);
      setEbooks(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this ebook?")) return;
    try {
      await deleteEbook(id);
      fetchEbooks();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="library">
      <header className="library__header">
        <div className="library__header-glow" />
        <div className="library__hero">
          <h1 className="library__hero-title">📖 E-Book Library</h1>
          <p className="library__hero-desc">Your personal digital reading collection — upload, read and download books anytime.</p>
        </div>
        <div className="library__title-wrap">
          <span className="library__icon">📚</span>
          <div>
            <h2 className="library__title">Digital Library</h2>
            <p className="library__subtitle">{ebooks.length} book{ebooks.length !== 1 ? "s" : ""} in your collection</p>
          </div>
        </div>
      </header>

      <div className="library__controls">
        <SearchBar onSearch={handleSearch} />
        <UploadModal fetchEbooks={fetchEbooks} />
      </div>

      <div className="library__divider" />

      {ebooks.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="library__grid">
          {ebooks.map((ebook) => (
            <BookCard key={ebook.id} ebook={ebook} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
