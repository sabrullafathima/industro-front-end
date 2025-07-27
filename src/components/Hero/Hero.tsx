function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem",
        backgroundColor: "#e0f2fe",
      }}
    >
      <div style={{ maxWidth: "50%" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
          Get Real Project Experience, Not Just Theory
        </h1>
        <p style={{ margin: "1rem 0", fontSize: "1.1rem" }}>
          Work on real projects, earn while hiring and land high-paying jobs
          with our trusted recommendations..
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Apply as Candidate
          </button>
          <button
            style={{
              background: "#2563eb",
              color: "#fff",
              padding: "0.8rem 1.5rem",
              borderRadius: "6px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Hire Talent
          </button>
        </div>
      </div>
      <div>
        <img
          src="/hero-illustration.png"
          alt="Hero"
          style={{ width: "400px" }}
        />
      </div>
    </section>
  );
}

export default Hero;
