import "./Tables.css";

function SignInOutTable() {

const signInOutData = [
    {
        site: "Site A",
        company: "Company X",
        name: "John Doe",
        timeIn: "8:00 AM",
        timeOut: "4:00 PM",
        tasksCompleted: "Task 1, Task 2"
    },
    {
        site: "Site B",
        company: "Company Y",
        name: "Jane Smith",
        timeIn: "9:00 AM",
        timeOut: "5:00 PM",
        tasksCompleted: "Task 3, Task 4"
    },
    {
        site: "Site C",
        company: "Company Z",
        name: "Bob Johnson",
        timeIn: "7:30 AM",
        timeOut: "3:30 PM",
        tasksCompleted: "Task 5, Task 6"
    },
    {
        site: "Site D",
        company: "Company W",
        name: "Alice Brown",
        timeIn: "8:30 AM",
        timeOut: "4:30 PM",
        tasksCompleted: "Task 7, Task 8"
    },
    {
        site: "Site E",
        company: "Company V",
        name: "Charlie Green",
        timeIn: "9:30 AM",
        timeOut: "5:30 PM",
        tasksCompleted: "Task 9, Task 10"
    },
    {
        site: "Site F",
        company: "Company U",
        name: "Diana White",
        timeIn: "7:00 AM",
        timeOut: "3:00 PM",
        tasksCompleted: "Task 11, Task 12"
    },
    {
        site: "Site G",
        company: "Company T",
        name: "Edward Black",
        timeIn: "8:15 AM",
        timeOut: "4:15 PM",
        tasksCompleted: "Task 13, Task 14"
    },
    {
        site: "Site H",
        company: "Company S",
        name: "Fiona Gray",
        timeIn: "9:45 AM",
        timeOut: "5:45 PM",
        tasksCompleted: "Task 15, Task 16"
    },
    {
        site: "Site I",
        company: "Company R",
        name: "George Blue",
        timeIn: "7:45 AM",
        timeOut: "3:45 PM",
        tasksCompleted: "Task 17, Task 18"
    },
    {
        site: "Site J",
        company: "Company Q",
        name: "Hannah Yellow",
        timeIn: "8:45 AM",
        timeOut: "4:45 PM",
        tasksCompleted: "Task 19, Task 20"
    }
];

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
  {signInOutData.map((record, index) => (
    <tr key={index}>
      <td>{record.site}</td>
      <td>{record.company}</td>
      <td>{record.name}</td>
      <td>{record.timeIn}</td>
      <td>{record.timeOut}</td>
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