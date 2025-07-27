function ForCanditates() {
  return (
    <div
      style={{
        flex: 1,
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1.5rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#111" }}>
        For Candidates
      </h2>
      <p style={{ marginBottom: "1.5rem", color: "#555", lineHeight: "1.6" }}>
        Apply for internships and gain hands-on experience by working on
        real-world projects. Build your skills, grow your career, and earn while
        you learn.
      </p>
      <button
        style={{
          background: "#f1f5f9",
          color: "#111",
          padding: "0.75rem 1.5rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: "bold",
        }}
      >
        Apply as Candidate
      </button>
    </div>
  );
}

export default ForCanditates;
