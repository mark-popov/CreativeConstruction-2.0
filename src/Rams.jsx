import logo from "./assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Rams.css";
import { useState } from "react";
import { supabase } from "./supabaseClient";

function Rams ({setRams}) {

    const [submitted, setSubmitted] = useState(false);

    const today = new Date().toISOString().split("T")[0];

    const [formData, setFormData] = useState({
        site: "",
        company: "",
        date: today,
        ramsFile: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit started");

        const file = formData.ramsFile;
        console.log("file:", file);
        if (!file) return;

        const filePath = `${Date.now()}-${file.name}`;
        console.log("filePath:", filePath);

        const { error: uploadError } = await supabase
            .storage
            .from("rams-files")
            .upload(filePath, file);

            console.log("uploadError:", uploadError);

            if (uploadError) {
                console.error("Error uploading file:", uploadError);
                return;
            }
            

            const { data: publicUrlData } = supabase
            .storage            
            .from("rams-files")
            .getPublicUrl(filePath);

            const fileUrl = publicUrlData.publicUrl;

            const { error: insertError } = await supabase
            .from("rams")
            .insert([
                {
                site: formData.site,
                company: formData.company,
                date: formData.date,
                file_name: file.name,
                file_url: fileUrl
                }
            ]);

            console.log("insertError:", insertError);

            if (insertError) {
                console.error("Error inserting data:", insertError);
                return;
            }
            

  setRams(prev => {
  const newItem = {
    site: formData.site,
    company: formData.company,
    date: formData.date,
    file_name: file.name,
    file_url: fileUrl
  };

  const updated = [newItem, ...prev];
  localStorage.setItem("rams", JSON.stringify(updated));
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
            ramsFile: null
        });

    
    }
    return (
        <>
<div className="rams-page">
            <div className="header">
                <Link to="/">
                <img src={logo} alt="Creative Construction Logo" />
                </Link>
                    <h1>RAMS</h1>
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
                <label htmlFor="induction-date">RAMS Submitted on:</label>
                <input type="date" name="induction-date" id="induction-date" value={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} required/>
            </div>

        </div>

        <div className="site-info">
            <h2>Please Upload your RAMS</h2>
                <div className="rams-upload">
                    <label htmlFor="rams-upload" className="custom-file-upload">
                        Choose File
                    </label>
                    <input type="file" id="rams-upload" name="rams-upload" accept=".pdf,.doc,.docx" onChange={(e) => setFormData({...formData, ramsFile: e.target.files[0]})} required/>
                </div>
        </div>

        <div className="submit-container">
            <button type="submit" className="submit-button">{submitted ? "Sent ✅" : "Submit"}</button>
        </div>
    
    </form>   

</div>         

        </>
    );
}

export default Rams;