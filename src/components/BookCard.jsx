import { useNavigate } from "react-router-dom";
import "./BookCard.css";

const THEMES = [
  { spine: "linear-gradient(180deg,#7c3aed,#a855f7)", glow: "rgba(124,58,237,0.55)", read: "linear-gradient(135deg,#7c3aed,#a855f7)", author: "#c4b5fd" },
  { spine: "linear-gradient(180deg,#0ea5e9,#06b6d4)", glow: "rgba(14,165,233,0.55)", read: "linear-gradient(135deg,#0ea5e9,#06b6d4)", author: "#7dd3fc" },
  { spine: "linear-gradient(180deg,#f59e0b,#f97316)", glow: "rgba(245,158,11,0.55)", read: "linear-gradient(135deg,#f59e0b,#f97316)", author: "#fcd34d" },
  { spine: "linear-gradient(180deg,#10b981,#059669)", glow: "rgba(16,185,129,0.55)", read: "linear-gradient(135deg,#10b981,#059669)", author: "#6ee7b7" },
  { spine: "linear-gradient(180deg,#ec4899,#db2777)", glow: "rgba(236,72,153,0.55)", read: "linear-gradient(135deg,#ec4899,#db2777)", author: "#f9a8d4" },
  { spine: "linear-gradient(180deg,#f43f5e,#e11d48)", glow: "rgba(244,63,94,0.55)", read: "linear-gradient(135deg,#f43f5e,#e11d48)", author: "#fda4af" },
];

function BookCard({ ebook, onDelete }) {
  const navigate = useNavigate();
  const theme = THEMES[ebook.id % THEMES.length];

  const handleDownload = async () => {
    const res = await fetch(`http://localhost:3000${ebook.file_url}`);
    const blob = await res.blob();
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = ebook.file_name;
    a.click();
    URL.revokeObjectURL(a.href);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -18;
    card.style.transform = `perspective(900px) rotateY(${x}deg) rotateX(${y}deg) translateZ(12px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  };

  return (
    <div
      className="book-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ "--card-glow": theme.glow }}
    >
      <div
        className="book-card__spine"
        style={{ background: theme.spine, boxShadow: `3px 0 18px ${theme.glow}` }}
      />
      <div className="book-card__content">
        <div className="book-card__icon">📖</div>
        <h3 className="book-card__title">{ebook.title}</h3>
        <p className="book-card__author">by {ebook.author}</p>
        <div className="book-card__meta">
          <span>{ebook.file_type?.toUpperCase()}</span>
          <span>{(ebook.file_size / 1024).toFixed(1)} KB</span>
        </div>
        <div className="book-card__actions">
          <button
            className="btn btn--read"
            style={{ background: theme.read, boxShadow: `0 5px 20px ${theme.glow}` }}
            onClick={() => navigate(`/reader/${ebook.id}`)}
          >
            📖 Read
          </button>
          <button className="btn btn--download" onClick={handleDownload}>
            ⬇
          </button>
          <button className="btn btn--danger" onClick={() => onDelete(ebook.id)}>
            🗑
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
