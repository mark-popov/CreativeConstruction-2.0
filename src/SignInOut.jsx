import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./SignInOut.css";
import { useState, useEffect } from "react";


function SignInOut({ setSignInOuts, signInOuts }) {

    const [signedIn, setSignedIn] = useState(false);

    const [submitted, setSubmitted] = useState(false);

    const now = new Date().toLocaleTimeString("en-GB", {
  hour: "2-digit",
  minute: "2-digit",
});

    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        site: "",
        company: "",
        date: today,
        forename: "",
        surname:"",
        signInTime: now,
        signOutTime: "",
        tasksCompleted: ""
  });

  const isAlreadySignedIn = signInOuts.some(record => 
    record.forename === formData.forename &&
    record.surname === formData.surname &&
    record.date === formData.date &&
    record.site === formData.site &&
    !record.signOutTime
    );

    useEffect(() => {
        setSignedIn(isAlreadySignedIn);
    }, [formData, signInOuts]);

  const handleSubmit = (e) => {
    e.preventDefault();


    setSignInOuts(prev => {
        let updated;
        if (signedIn) {
            updated = prev.map(record => 
                record.forename === formData.forename &&
                record.surname === formData.surname &&
                record.date === formData.date &&
                record.site === formData.site &&
                !record.signOutTime
                ? 
                {...record, signOutTime: now, tasksCompleted: formData.tasksCompleted}
                : record
            );
        } else {
             updated = [formData, ...prev];
        }
      localStorage.setItem("signInOuts", JSON.stringify(updated));
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
      signInTime: now,
      signOutTime: "",
      tasksCompleted: ""
    });
};

  
    return (
<>
{/*Header Section */}
    <div className="sign-in-out-page">
        <div className="header">
            <Link to="/">
                <img src={logo} alt="Creative Construction Logo" />
            </Link>
            <h1>Sign In/Out Page</h1>
        </div>


    <form onSubmit={handleSubmit}>
{/* Site Information Section */}
        <div className="site-info">
            <div className="form-group">
                <label htmlFor="site-name">Site Name:</label>
                <select name="site-name" id="site-name" value={formData.site} onChange={(e) => setFormData({...formData, site:e.target.value})} required>
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
                <select name="company-name" id="company-name" value={formData.company} onChange={(e) => setFormData({...formData, company:e.target.value})} required>
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
                <label htmlFor="sign-in-out-date">Sign In/Out Date:</label>
                <input type="date" name="sign-in-out-date" id="sign-in-out-date" value={formData.date} onChange={(e) => setFormData({...formData, date:e.target.value})} required/>
            </div>

        </div>



{/* Worker Information Section */}
        <div className="worker-information">
            <div>
                <label htmlFor="forename">Forename:</label>
                <input type="text" name="forename" id="forename" placeholder="John" value={formData.forename} onChange={(e) => setFormData({...formData, forename:e.target.value})} required/>
            </div>

            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" placeholder="Smith" value={formData.surname} onChange={(e) => setFormData({...formData, surname:e.target.value})} required/>
            </div>

            <div className="form-group">
                <label htmlFor="sign-in-out-time">Time:</label>
                <input type="time" name="sign-in-out-time" id="sign-in-out-time" value={formData.signInTime} onChange={(e) => setFormData({...formData, signInTime:e.target.value})} required/>
            </div>

        </div>



{/* Tasks Completed Section */}

    {signedIn && (
        <div className="tasks-completed">

            <div className="tasks-completed-field">
                <label htmlFor="tasks-completed">Tasks Completed Today:</label>
                <textarea name="tasks-completed" id="tasks-completed" placeholder="Describe the tasks you completed today..." value={formData.tasksCompleted} onChange={(e) => setFormData({...formData, tasksCompleted:e.target.value})} required></textarea>

            </div>

        </div>
    )}    

{/*Button Section */}
        <div className="sign-in-out-button">
            <button type="submit" className="submit-button">{submitted ? "Sent ✅" : (signedIn ? "Sign Out" : "Sign In")}</button>
        </div>
    </form>

    </div>
</>
  );
}

export default SignInOut;