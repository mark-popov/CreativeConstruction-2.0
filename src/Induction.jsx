import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Induction.css";
import { useState } from "react";



function Induction({setInductions}) {

  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    site: "",
    company: "",
    date: today,
    forename: "",
    surname:"",
    trade: "",
    cscsNumber: "",
    cscsExpiry: "",
    ramsAgreed: false,
    medicalConditions: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    contactPhone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInductions(prev => {
      const updated = [...prev, formData];
      localStorage.setItem("inductions", JSON.stringify(updated));
      return updated;
    });

    setSubmitted(true);

setTimeout(() => {
  setSubmitted(false);
}, 2000);


    setFormData({
      site: "",
      company: "",
      date: today,
      forename: "",
      surname:"",
      trade: "",
      cscsNumber: "",
      cscsExpiry: "",
      ramsAgreed: false,
      medicalConditions: "",
      emergencyContactName: "",
      emergencyContactNumber: "",
      contactPhone: ""
    });
  };


  const handleSiteChange = (e) => {
  console.log(e.target.value);
};

  const handleCompanyChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
    <div className="induction-page">
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Creative Construction Logo" />
      </Link>

      <h1>Induction Page</h1>
    </div>
  <form onSubmit={handleSubmit}>
    <div className="site-info">

      <div className="form-group">
        <label htmlFor="site-name">Site Name:</label>
        <select name="site-name" id="site-name" value={formData.site} onChange={(e) => setFormData({...formData, site: e.target.value})} required>
            <option value="">Choose site</option>
            <option value="Brassmill Lane, Bath">Brassmill Lane, Bath</option>
            <option value="WGH, Weston-super-Mare">WGH, Weston-super-Mare</option>
            <option value="Groundswell, Swindon">Groundswell, Swindon</option>
            <option value="Queens Square, Bristol">Queens Square, Bristol</option>
            <option value="Temple Point, Bristol">Temple Point, Bristol</option>
            <option value="Poplar Way, Avonmouth">Poplar Way, Avonmouth</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="company-name">Company Name:</label>
        <select name="company-name" id="company-name" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} required>
            <option value="">Choose Company</option>
            <option value="EPS">EPS</option>
            <option value="Distinction Decorating">Distinction Decorating</option>
            <option value="Easy Access">Easy Access</option>
            <option value="Concept">Concept</option>
            <option value="PLP Electrical">PLP Electrical</option>
            <option value="ADAMS Roofing">ADAMS Roofing</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="induction-date">Induction Date:</label>
        <input type="date" name="induction-date" id="induction-date" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value})} required/>
      </div>

    </div>

    <div className="worker-information">
      <h2>Worker Information</h2>
    <div className="form-row">
        <div>
            <label htmlFor="forename">Forename:</label>
            <input type="text" name="forename" id="forename" placeholder="John" value={formData.forename} onChange={(e) => setFormData({...formData, forename: e.target.value})} required/>
        </div>
        <div>
            <label htmlFor="surname">Surname:</label>
            <input type="text" name="surname" id="surname" placeholder="Smith" value={formData.surname} onChange={(e) => setFormData({...formData, surname: e.target.value})} required/>
        </div>
        <div>
            <label htmlFor="trade">Trade:</label>
            <input type="text" name="trade" id="trade" placeholder="Carpenter" value={formData.trade} onChange={(e) => setFormData({...formData, trade: e.target.value})} required/>
        </div>
        <div>
            <label htmlFor="cscs-number">CSCS Card Number:</label>
            <input type="text" id="cscs-number" name="cscs-number" placeholder="1234567890" value={formData.cscsNumber} onChange={(e) => setFormData({...formData, cscsNumber: e.target.value})} required/>
        </div>
        <div>
            <label htmlFor="cscs-expiry">CSCS Expiry Date:</label>
            <input type="date" id="cscs-expiry" name="cscs-expiry" value={formData.cscsExpiry} onChange={(e) => setFormData({...formData, cscsExpiry: e.target.value})} required/>
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
              <input type="checkbox" checked={formData.ramsAgreed} onChange={(e) => setFormData({...formData, ramsAgreed: e.target.checked})} required />
              I confirm that I have read, understood and agree to comply with the RAMS provided for this site.
            </label>
          </div>
        </div>

    <div className="medical-conditions">
      <h2>Medical Conditions</h2>
      <p>Do you have any medical conditions or are you taking any medication that site management should be aware of in case of an emergency?</p>
      <textarea name="medical-conditions" id="medical-conditions" rows="4" placeholder="If applicable, please provide details here." onChange={(e) => setFormData({...formData, medicalConditions: e.target.value})}></textarea>
    </div>

    <div className="emergency-contact">
      <h2>Emergency Contact Details</h2>
      <p>Please provide the details of your emergency contact person.</p>
      <div className="emergency-contact-name">
      <label htmlFor="emergency-contact-name">Name:</label>
      <input type="text" name="emergency-contact-name" id="emergency-contact-name" placeholder="Name" value={formData.emergencyContactName} onChange={(e) => setFormData({...formData, emergencyContactName: e.target.value})} />
      </div>
       <div className="emergency-contact-number">
      <label htmlFor="emergency-contact-number">Tel. Number:</label>
      <input type="text" name="emergency-contact-number" id="emergency-contact-number" placeholder="Tel. Number" value={formData.emergencyContactNumber} onChange={(e) => setFormData({...formData, emergencyContactNumber: e.target.value})} />
      </div>

    </div>

    <div className="contact-phone">
      <h2>Contact Phone</h2>
        <label htmlFor="contact-phone">Phone number:</label>
        <input type="text" name="contact-phone" id="contact-phone" placeholder="Phone Number" value={formData.contactPhone} onChange={(e) => setFormData({...formData, contactPhone: e.target.value})} />
      </div>

      <div className="submit-container">
        <button type="submit" className="submit-button">{submitted ? "Sent ✅" : "Submit Induction"}</button>
      </div>
  </form>   

        </div>
    </>
    



  );
}

export default Induction;