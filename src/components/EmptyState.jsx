function EmptyState() {
  return (
    <div style={{
      textAlign: "center",
      padding: "80px 20px",
      background: "var(--surface)",
      border: "1px dashed var(--border)",
      borderRadius: "var(--radius)",
      backdropFilter: "blur(20px)",
    }}>
      <div style={{ fontSize: "64px", marginBottom: "16px", filter: "drop-shadow(0 0 20px rgba(124,58,237,0.5))" }}>📚</div>
      <h2 style={{ color: "var(--text-h)", marginBottom: "8px" }}>No Ebooks Yet</h2>
      <p style={{ color: "var(--text)", fontSize: "14px" }}>Upload your first PDF to get started.</p>
    </div>
  );
}

export default EmptyState;
