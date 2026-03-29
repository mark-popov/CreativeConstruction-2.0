import "./Homepage.css";
import logo from "./assets/images/logo.svg";
import { useState } from "react";

function Homepage() {

  const [error, setError] = useState("");

  const handleManagementClick = (e) => {
    e.preventDefault();

    const password = propt("Enter management password:");

    if (password === "manage123") {}
  }

  return (
    <div className="homepage">
      <div className="header">
        <img src={logo} alt="Creative Construction Logo" />
        <h2>Sub-contractor Portal</h2>
      </div>

      <p className="disclaimer">
        This portal is designed for Subcontractors ONLY
      </p>

      <p className="disclaimer1">
        This form records site information and acknowledgements for health and
        safety purposes and does not replace statutory duties or legal
        responsibilities.
      </p>

      <div className="nav">
        <a href="#">Sign In / Out</a>
        <a href="#">Induction</a>
        <a href="#">RAMS</a>
        <a href="#" onClick={handleManagementClick}>Management Dashboard</a>
      </div>

      <p>{error}</p>

      <div className="footer">
        <p>© 2026 Creative Construction. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Homepage;