import "./Management.css";
import logo from "./assets/images/logo.svg";



function Management() {

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
          <p>Recent submissions</p>
        </div>
        <div className="choose-view">
            <button>View Sign In/Out</button>
            <button>View Induction</button>
            <button>View RAMS</button>
        </div>

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

        <div className="search-box">
            <label htmlFor="search-box">Search by name:</label>
            <input type="text" id="search-box" placeholder="Enter name..." onChange={handleSearchChange}/>
        </div>
    </>
  );
}

export default Management;