import "./Tables.css";

function InductionTable({ data }) {
  

    return (
    <>
    <h1>INDUCTIONS</h1>
    <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Site</th>
          <th>Name</th>
          <th>Company</th>
          <th>Trade</th>
          <th>Contact Number</th>
          <th>CSCS Number</th>
          <th>CSCS Expiry</th>
          <th>RAMS Agreed</th>
        </tr>
      </thead>
      <tbody>
  {Array.isArray(data) && data.map((record, index) => (
    <tr key={index}>
      <td>{record.date}</td>
      <td>{record.site}</td>
      <td>{record.forename + " " + record.surname}</td>
      <td>{record.company}</td>
      <td>{record.trade}</td>
      <td>{record.contactPhone}</td>
      <td>{record.cscsNumber}</td>
      <td>{record.cscsExpiry}</td>
      <td>{record.ramsAgreed ? "Yes" : "No"}</td>
    </tr>
  ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default InductionTable;
