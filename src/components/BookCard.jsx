import { useNavigate } from "react-router-dom";

function BookCard({ ebook, onDelete }) {
  const navigate = useNavigate();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "300px",
      }}
    >
      <h3>{ebook.title}</h3>

      <p>
        <strong>Author:</strong> {ebook.author}
      </p>

      <p>
        <strong>File:</strong> {ebook.file_name}
      </p>

      <p>
        <strong>Type:</strong> {ebook.file_type}
      </p>

      <p>
        <strong>Size:</strong> {(ebook.file_size / 1024).toFixed(2)} KB
      </p>

      <button onClick={() => window.open( `http://localhost:3000${ebook.file_url}`, "_blank")}>
        Read
      </button>

      <button
        onClick={() =>
          window.open(`http://localhost:3000${ebook.file_url}`, "_blank")
        }
        style={{ marginLeft: "10px" }}
      >
        Download
      </button>

      <button
        onClick={() => onDelete(ebook.id)}
        style={{
          marginLeft: "10px",
          color: "red",
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default BookCard;