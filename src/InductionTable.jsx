import "./Tables.css";

function InductionTable() {

const inductionData = [
  {
    date: "2023-10-01",
    site: "Brassmill Lane, Bath",
    name: "John Doe",
    company: "EPS",
    trade: "Electrician",
    contactNumber: "123-456-7890",
    cscsNumber: "123456",
    cscsExpiry: "2027-10-01"
  },
    {
    date: "2023-10-02",
    site: "WGH, Weston-super-Mare",
    name: "Jane Smith",
    company: "Distinction Decorating",
    trade: "Decorator",
    contactNumber: "987-654-3210",
    cscsNumber: "654321",
    cscsExpiry: "2028-10-02"
  },
    {
    date: "2023-10-03",
    site: "Groundswell, Swindon",
    name: "Bob Johnson",
    company: "Easy Access",
    trade: "Scaffolder",
    contactNumber: "555-555-5555",
    cscsNumber: "111222",
    cscsExpiry: "2029-10-03"
  },
    {
    date: "2023-10-04",
    site: "Queens Square, Bristol",
    name: "Alice Brown",
    company: "Concept",
    trade: "Carpenter",
    contactNumber: "444-444-4444",
    cscsNumber: "333444",
    cscsExpiry: "2027-10-04"
  },
    {
    date: "2023-10-05",
    site: "Temple Point, Bristol",
    name: "Charlie Green",
    company: "PLP Electrical",
    trade: "Electrician",
    contactNumber: "222-222-2222",
    cscsNumber: "555666",
    cscsExpiry: "2028-10-05"
  },
    {
    date: "2023-10-06",
    site: "Poplar Way, Avonmouth",
    name: "Diana White",
    company: "ADAMS Roofing",
    trade: "Roofer",
    contactNumber: "333-333-3333",
    cscsNumber: "777888",
    cscsExpiry: "2029-10-06"
  },
    {
    date: "2023-10-07",
    site: "Brassmill Lane, Bath",
    name: "Eve Black",
    company: "EPS",
    trade: "Electrician",
    contactNumber: "111-111-1111",
    cscsNumber: "999000",
    cscsExpiry: "2027-10-07"
  },
    {
    date: "2023-10-08",
    site: "WGH, Weston-super-Mare",
    name: "Frank Gray",
    company: "Distinction Decorating",
    trade: "Decorator",
    contactNumber: "666-666-6666",
    cscsNumber: "222333",
    cscsExpiry: "2028-10-08"
    },
    {
    date: "2023-10-09",
    site: "Groundswell, Swindon",
    name: "Grace Blue",
    company: "Easy Access",
    trade: "Scaffolder",
    contactNumber: "777-777-7777",
    cscsNumber: "444555",
    cscsExpiry: "2029-10-09"
    }
  
];

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
        </tr>
      </thead>
      <tbody>
  {inductionData.map((record, index) => (
    <tr key={index}>
      <td>{record.date}</td>
      <td>{record.site}</td>
      <td>{record.name}</td>
      <td>{record.company}</td>
      <td>{record.trade}</td>
      <td>{record.contactNumber}</td>
      <td>{record.cscsNumber}</td>
      <td>{record.cscsExpiry}</td>
    </tr>
  ))}
      </tbody>
    </table>
    </div>
    </>
  );
}

export default InductionTable;
