import "./Management.css";
import logo from "./assets/images/logo.svg";
import { useState } from "react";
import SignInOutTable from './SignInOutTable'; 
import InductionTable from './InductionTable';
import { Link } from "react-router-dom";


function Management({inductions}) {

const [selectedView, setSelectedView] = useState("sign-in-out");

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
          <Link to="/">
          <img src={logo} alt="Creative Construction Logo" />
          </Link>
          <h1>Management Dashboard</h1>
        </div>

      {/* CHOOSE VIEW DROPDOWN - FILTER */}
        <div className="choose-view">
            <button
              className={selectedView === "sign-in-out" ? "active" : ""}
              onClick={() => setSelectedView("sign-in-out")}
            >
              View Sign In / Out
            </button>

            <button
              className={selectedView === "inductions" ? "active" : ""}
                onClick={() => setSelectedView("inductions")}
                >
              View Inductions
            </button>

            <button
              className={selectedView === "rams" ? "active" : ""}
              onClick={() => setSelectedView("rams")}
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


          <div className="data-table">
  {selectedView === "sign-in-out" && <SignInOutTable />}
  {selectedView === "inductions" && <InductionTable data={inductions} />}
</div>

    </>
  );
}

export default Management;