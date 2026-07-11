import { useEffect, useState } from "react";
import { getEbooks, searchEbooks, deleteEbook } from "../api/ebookApi";
import BookCard from "../components/BookCard";
import EmptyState from "../components/EmptyState";
import Loader from "../components/Loader";
import UploadModal from "../components/UploadModal";
import SearchBar from "../components/SearchBar";
import heroBg from "../assets/hero.png";
import toast from "react-hot-toast";
import "./Library.css";

function Library() {
  const [ebooks, setEbooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => { fetchEbooks(); }, []);

  const fetchEbooks = async () => {
    try {
      setError(null);
      const response = await getEbooks();
      setEbooks(response.data.data);
    } catch (err) {
      console.error("Error fetching ebooks:", err);
      setError("Failed to load ebooks. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (query) => {
    try {
      if (!query.trim()) { fetchEbooks(); return; }
      const response = await searchEbooks(query);
      setEbooks(response.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Search failed. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this ebook?")) return;
    try {
      await deleteEbook(id);
      toast.success("Ebook deleted successfully.");
      fetchEbooks();
    } catch (err) {
      console.error(err);
      toast.error("Delete failed. Please try again.");
    }
  };

  if (loading) return <Loader />;

  if (error) return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", gap: "16px" }}>
      <div style={{ fontSize: "48px" }}>⚠️</div>
      <p style={{ color: "#f87171", fontSize: "16px", textAlign: "center", maxWidth: "400px" }}>{error}</p>
      <button onClick={fetchEbooks} style={{ padding: "10px 24px", background: "linear-gradient(135deg,#7c3aed,#9333ea)", color: "#fff", border: "none", borderRadius: "10px", cursor: "pointer", fontWeight: 700 }}>Retry</button>
    </div>
  );

  return (
    <div className="library" style={{ backgroundImage: `url(${heroBg})` }}>
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
