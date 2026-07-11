function EmptyState() {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px 20px",
      background: "#1a1a2e",
      border: "1px dashed rgba(255,255,255,0.15)",
      borderRadius: "20px",
      margin: "0 32px",
    }}>
      <div style={{ fontSize: "64px", marginBottom: "16px", filter: "drop-shadow(0 0 20px rgba(124,58,237,0.5))" }}>📚</div>
      <h2 style={{ color: "#f0f0ff", marginBottom: "8px", fontSize: "22px" }}>No Ebooks Found</h2>
      <p style={{ color: "#a0a0c8", fontSize: "15px" }}>Upload your first PDF to get started.</p>
    </div>
  );
}

export default EmptyState;
