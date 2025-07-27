function HowItWorks() {
  return (
    <section style={{ textAlign: "center", padding: "3rem 2rem" }}>
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        How It Works
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div
          style={{
            width: "250px",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <img
            src="/signup-icon.png"
            alt="Sign Up"
            style={{ marginBottom: "1rem" }}
          />
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Sign Up
          </h3>
          <p>Create your profile and get started.</p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <img
            src="/apply-icon.png"
            alt="Apply or Hire"
            style={{ marginBottom: "1rem" }}
          />
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Apply or Hire
          </h3>
          <p>Find opportunities or top talent easily.</p>
        </div>
        <div
          style={{
            width: "250px",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <img
            src="/experience-icon.png"
            alt="Experience"
            style={{ marginBottom: "1rem" }}
          />
          <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
            Gain Experience
          </h3>
          <p>Work on real projects and grow your skills.</p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
