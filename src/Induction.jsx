import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Induction.css";

function Induction() {

  const handleSiteChange = (e) => {
  console.log(e.target.value);
};

  const handleCompanyChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="induction-page">
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Creative Construction Logo" />
      </Link>

      <h1>Induction Page</h1>
    </div>

    <div className="site-info">

      <div className="form-group">
        <label htmlFor="site-name">Site Name:</label>
        <select name="site-name" id="site-name" onChange={handleSiteChange} required>
            <option value="">Choose site</option>
            <option value="brassmill">Brassmill Lane, Bath</option>
            <option value="wgh">WGH, Weston-super-Mare</option>
            <option value="groundswell">Groundswell, Swindon</option>
            <option value="queens-square">Queens Square, Bristol</option>
            <option value="temple-point">Temple Point, Bristol</option>
            <option value="poplar-way">Poplar Way, Avonmouth</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="company-name">Company Name:</label>
        <select name="company-name" id="company-name" onChange={handleCompanyChange} required>
            <option value="">Choose Company</option>
            <option value="eps">EPS</option>
            <option value="distinction">Distinction Decorating</option>
            <option value="easy-access">Easy Access</option>
            <option value="concept">Concept</option>
            <option value="plp">PLP Electrical</option>
            <option value="adams-roofing">ADAMS Roofing</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="induction-date">Induction Date:</label>
        <input type="date" name="induction-date" id="induction-date" required/>
      </div>

    </div>

    <div className="worker-information">
      <h2>Worker Information</h2>
    <div className="form-row">
        <div>
            <label htmlFor="forename">Forename:</label>
            <input type="text" name="forename" id="forename" placeholder="John" required/>
        </div>
        <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" placeholder="Smith" required/>
        </div>
        <div>
            <label htmlFor="trade">Trade:</label>
            <input type="text" name="trade" id="trade" placeholder="Carpenter" required/>
        </div>
        <div>
            <label htmlFor="cscs-number">CSCS Card Number:</label>
            <input type="text" id="cscs-number" name="cscs-number" placeholder="1234567890" required/>
        </div>
        <div>
            <label htmlFor="cscs-expiry">CSCS Expiry Date:</label>
            <input type="date" id="cscs-expiry" name="cscs-expiry" required/>
        </div>
      </div> 
    </div>
    


    <div className="form-rams-section">
          <h2>RAMS Agreement</h2>

          <div className="view-rams">
            <button type="button" className="view-rams-button">
              View RAMS
            </button>
          </div>

          <div className="form-group-checkbox">
            <label>
              <input type="checkbox" required />
              I confirm that I have read, understood and agree to comply with the RAMS provided for this site.
            </label>
          </div>
        </div>

    <div className="medical-conditions">
      <h2>Medical Conditions</h2>
      <p>Do you have any medical conditions or are you taking any medication that site management should be aware of in case of an emergency?</p>
      <textarea name="medical-conditions" id="medical-conditions" rows="4" placeholder="If applicable, please provide details here."></textarea>
    </div>

    <div className="emergency-contact">
      <h2>Emergency Contact Details</h2>
      <p>Please provide the details of your emergency contact person.</p>
      <div className="emergency-contact-name">
      <label htmlFor="emergency-contact-name">Name:</label>
      <input type="text" name="emergency-contact-name" id="emergency-contact-name" placeholder="Name" />
      </div>
       <div className="emergency-contact-number">
      <label htmlFor="emergency-contact-number">Tel. Number:</label>
      <input type="text" name="emergency-contact-number" id="emergency-contact-number" placeholder="Tel. Number" />
      </div>

    </div>

    <div className="contact-phone">
      <h2>Contact Phone</h2>
        <label htmlFor="contact-phone">Phone number:</label>
        <input type="text" name="contact-phone" id="contact-phone" placeholder="Phone Number" />
      </div>

      <div className="submit-container">
        <button type="submit" className="submit-button">Submit Induction</button>
      </div>

        </div>
    



  );
}

export default Induction;