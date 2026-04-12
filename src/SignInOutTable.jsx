import "./Tables.css";

function SignInOutTable({ data }) {


  return (
    <>
    <h1>Sign In / Out Table</h1>
    <div className="table-container">
    <table className="custom-table">
      <thead>
        <tr>
          <th>Site</th>
          <th>Company</th>
          <th>Name</th>
          <th>Time In</th>
          <th>Time Out</th>
          <th>Tasks Completed</th>
        </tr>
      </thead>
      <tbody>
  {Array.isArray(data) && data.map((record, index) => (
    <tr key={index}>
      <td>{record.site}</td>
      <td>{record.company}</td>
      <td>{record.forename + " " + record.surname}</td>
      <td>{record.signInTime}</td>
      <td>{record.signOutTime}</td>
      <td>{record.tasksCompleted}</td>
    </tr>
  ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default SignInOutTable;