import { useState } from "react";
import { uploadEbook } from "../api/ebookApi";
import "./UploadModal.css";

function UploadModal({ fetchEbooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) { alert("Please select a PDF file"); return; }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("file", file);

    setUploading(true);
    try {
      await uploadEbook(formData);
      setTitle(""); setAuthor(""); setFile(null);
      fetchEbooks();
    } catch (error) {
      console.error(error);
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <form className="upload-form" onSubmit={handleSubmit}>
      <input
        className="upload-form__input"
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="upload-form__input"
        type="text"
        placeholder="Author name"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <label className="upload-form__file">
        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          style={{ display: "none" }}
        />
        {file ? `📄 ${file.name}` : "📎 Choose PDF"}
      </label>
      <button className="upload-form__btn" type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "⬆ Upload"}
      </button>
    </form>
  );
}

export default UploadModal;
