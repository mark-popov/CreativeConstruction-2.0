import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./SignInOut.css";


function SignInOut() {
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



{/* Site Information Section */}
        <div className="site-info">
            <div className="form-group">
                <label htmlFor="site-name">Site Name:</label>
                <select name="site-name" id="site-name" required>
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
                <select name="company-name" id="company-name" required>
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
                <label htmlFor="sign-in-out-date">Sign In/Out Date:</label>
                <input type="date" name="sign-in-out-date" id="sign-in-out-date" required/>
            </div>

        </div>



{/* Worker Information Section */}
        <div className="worker-information">
            <div>
                <label htmlFor="forename">Forename:</label>
                <input type="text" name="forename" id="forename" placeholder="John" required/>
            </div>

            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" placeholder="Smith" required/>
            </div>

            <div className="form-group">
                <label htmlFor="sign-in-out-time">Sign In Time:</label>
                <input type="time" name="sign-in-out-time" id="sign-in-out-time" required/>
            </div>

        </div>



{/* Tasks Completed Section */}
        <div className="tasks-completed">

            <div className="tasks-completed-field">
                <label htmlFor="tasks-completed">Tasks Completed Today:</label>
                <textarea name="tasks-completed" id="tasks-completed" placeholder="Describe the tasks you completed today..." required></textarea>

            </div>

        </div>

{/*Button Section */}
        <div className="sign-in-out-button">
            <button type="submit">Sign In</button>
        </div>

    </div>
</>
  );
}

export default SignInOut;