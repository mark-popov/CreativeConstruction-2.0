import "./Tables.css";

function RamsTable({ data }) {
    return (
    <>
    <h1>RAMS</h1>
    <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          <th>Date Submitted</th>
          <th>Site</th>
          <th>Company</th>
          <th>File Name</th>
        </tr>
      </thead>
      <tbody>
  {Array.isArray(data) && data.map((record, index) => (
    <tr key={index}>
      <td>{record.date}</td>
      <td>{record.site}</td>
      <td>{record.company}</td>
      <td>  <a href={record.file_url} target="_blank" rel="noreferrer">
    {record.file_name}
  </a></td>
    </tr>
  ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default RamsTable;