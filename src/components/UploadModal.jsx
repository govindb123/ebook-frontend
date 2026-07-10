import { useState } from "react";
import { uploadEbook } from "../api/ebookApi";

function UploadModal({ fetchEbooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please select a PDF file");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("file", file);

    try {
      await uploadEbook(formData);

      alert("Ebook uploaded successfully!");

      setTitle("");
      setAuthor("");
      setFile(null);

      fetchEbooks();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        marginBottom: "30px",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
      }}
    >
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button type="submit">
        Upload
      </button>
    </form>
  );
}

export default UploadModal;