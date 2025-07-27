function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Industro</div>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "2rem",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <a href="#" style={{ textDecoration: "none", color: "#000" }}>
            Home
          </a>
        </li>
        <li>
          {" "}
          <a href="#" style={{ textDecoration: "none", color: "#000" }}>
            How it Works
          </a>
        </li>
        <li>
          {" "}
          <a href="#" style={{ textDecoration: "none", color: "#000" }}>
            For Candidates
          </a>
        </li>
        <li>
          {" "}
          <a href="#" style={{ textDecoration: "none", color: "#000" }}>
            For Hiring Managers
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
