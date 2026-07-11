function Loader() {
  return (
    <div style={{
      display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      height: "100vh", gap: "16px", color: "var(--text)",
    }}>
      <div style={{
        width: "48px", height: "48px",
        border: "3px solid var(--border)",
        borderTopColor: "var(--accent)",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <p style={{ fontSize: "14px" }}>Loading library...</p>
    </div>
  );
}

export default Loader;
