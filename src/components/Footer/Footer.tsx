import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer
      style={{
        background: "#f9fafb",
        padding: "2rem",
        marginTop: "2rem",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          maxWidth: "1200px",
          margin: "0 auto",
          gap: "2rem",
        }}
      >
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "0.5rem",
            }}
          >
            Industro
          </h2>
          <p style={{ color: "#555", fontSize: "0.95rem", lineHeight: "1.6" }}>
            Connecting talented candidates with hiring managers to create
            opportunities for growth and success.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ textDecoration: "none", color: "#555" }}>
                Home
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ textDecoration: "none", color: "#555" }}>
                How It Works
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ textDecoration: "none", color: "#555" }}>
                For Candidates
              </a>
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <a href="#" style={{ textDecoration: "none", color: "#555" }}>
                For Hiring Managers
              </a>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, minWidth: "250px" }}>
          <h3
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            Contact
          </h3>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            Email:{" "}
            <a href="mailto:support@industro.com" style={{ color: "#2563eb" }}>
              support@industro.com
            </a>
          </p>
          <p style={{ marginBottom: "0.5rem", color: "#555" }}>
            Phone:
            <a href="tel:+11234567890" style={{ color: "#2563eb" }}>
              +1 123 456 7890
            </a>
          </p>
        </div>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="#">
            <FaFacebook size={24} color="#555" />
          </a>
          <a href="#">
            <FaYoutube size={24} color="#555" />
          </a>
          <a href="#">
            <FaLinkedin size={24} color="#555" />
          </a>
          <a href="#">
            <FaInstagram size={24} color="#555" />
          </a>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          color: "#888",
          fontSize: "0.9rem",
        }}
      >
        © {new Date().getFullYear()} Industro. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
