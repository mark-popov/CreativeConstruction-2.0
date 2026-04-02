import "./Management.css";
import logo from "./assets/images/logo.svg";
import { useState } from "react";


function Management() {

const [selectedSite, setSelectedSite] = useState("sign-in-out");

const handleSiteChange = (e) => {
  console.log(e.target.value);
};

const handleCompanyChange = (e) => {
  console.log(e.target.value);
};

const handleSearchChange = (e) => {
  console.log(e.target.value);
};

  return (
    <>
        <div className="management-dashboard-header">
          <img src={logo} alt="Creative Construction Logo" />
          <h1>Management Dashboard</h1>
        </div>

      {/* CHOOSE VIEW DROPDOWN - FILTER */}
        <div className="choose-view">
            <button
              className={selectedSite === "sign-in-out" ? "active" : ""}
              onClick={() => setSelectedSite("sign-in-out")}
            >
              View Sign In/Out
            </button>

            <button
              className={selectedSite === "inductions" ? "active" : ""}
              onClick={() => setSelectedSite("inductions")}
            >
              View Inductions
            </button>

            <button
              className={selectedSite === "rams" ? "active" : ""}
              onClick={() => setSelectedSite("rams")}
            >
              View RAMS
            </button>
        </div>


      
      
      <div className="filter-boxes">
      {/* SITE NAME DROPDOWN - FILTER*/}
        <div className="site-name">
            <label htmlFor="site-name">Select a site:</label>
            <select name="site-name" id="site-name" onChange={handleSiteChange}>
                <option value="">Choose site:</option>
                <option value="brassmill">Brassmill Lane, Bath</option>
                <option value="wgh">WGH, Weston-super-Mare</option>
                <option value="groundswell">Groundswell, Swindon</option>
                <option value="queens-square">Queens Square, Bristol</option>
                <option value="temple-point">Temple Point, Bristol</option>
                <option value="poplar-way">Poplar Way, Avonmouth</option>
            </select>
        </div>

      {/* COMPANY NAME DROPDOWN - FILTER */}
        <div className="company-name">
            <label htmlFor="company-name">Select a company:</label>
            <select name="company-name" id="company-name" onChange={handleCompanyChange}>
                <option value="">Choose company:</option>
                <option value="eps">EPS</option>
                <option value="distinction">Distinction Decorating</option>
                <option value="easy-access">Easy Access</option>
                <option value="concept">Concept</option>
                <option value="plp">PLP Electrical</option>
                <option value="adams-roofing">ADAMS Roofing</option>
            </select>
        </div>

      {/* SEARCH BOX - FILTER */}
        <div className="search-box">
            <label htmlFor="search-box">Search by name:</label>
            <input type="text" id="search-box" placeholder="Enter name..." onChange={handleSearchChange}/>
        </div>
      </div>

      {/* TABLE OF SIGN IN/OUT, INDUCTIONS, RAMS */}
        <div className="data-table">
          
          </div>


    </>
  );
}

export default Management;