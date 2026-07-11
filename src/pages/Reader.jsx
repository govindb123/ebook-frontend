import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEbook } from "../api/ebookApi";
import "./Reader.css";

function Reader() {
  const { id } = useParams();
  const [ebook, setEbook] = useState(null);
  const [blobUrl, setBlobUrl] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBook();
    return () => { if (blobUrl) URL.revokeObjectURL(blobUrl); };
  }, []);

  const fetchBook = async () => {
    try {
      const response = await getEbook(id);
      const book = response.data.data;
      setEbook(book);
      const fileRes = await fetch(`http://localhost:3000${book.file_url}`);
      const blob = await fileRes.blob();
      setBlobUrl(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Error loading ebook:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="reader-loading">
        <div className="reader-loading__spinner" />
        <p>Loading your book...</p>
      </div>
    );
  }

  if (!ebook) {
    return (
      <div className="reader-loading">
        <p>📭 Ebook not found.</p>
        <Link to="/" className="reader__back">← Back to Library</Link>
      </div>
    );
  }

  return (
    <div className="reader">
      <div className="reader__topbar">
        <div className="reader__topbar-glow" />
        <div className="reader__info">
          <span className="reader__book-icon">📖</span>
          <div>
            <h2 className="reader__title">{ebook.title}</h2>
            <p className="reader__author">by {ebook.author}</p>
          </div>
        </div>
        <Link to="/" className="reader__back">
          ← Back to Library
        </Link>
      </div>

      <div className="reader__frame-wrap">
        {blobUrl ? (
          <iframe
            src={blobUrl}
            className="reader__iframe"
            title={ebook.title}
          />
        ) : (
          <div className="reader-loading">
            <div className="reader-loading__spinner" />
            <p>Rendering PDF...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Reader;
