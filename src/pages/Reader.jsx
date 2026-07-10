import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getEbook } from "../api/ebookApi";

function Reader() {
  const { id } = useParams();

  const [ebook, setEbook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    try {
      const response = await getEbook(id);
      setEbook(response.data.data);
    } catch (error) {
      console.error("Error loading ebook:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!ebook) {
    return <h2>Ebook not found.</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <div>
          <h2>{ebook.title}</h2>
          <p>Author: {ebook.author}</p>
        </div>

        <Link to="/">
          <button>← Back to Library</button>
        </Link>
      </div>

      window.open(
        `http://localhost:3000${ebook.file_url}`,
        "_blank"
      );
    </div>
  );
}

export default Reader;