import React, { useState } from "react";

function RegexValidator2() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const validateInput = (value) => {
    const regex = /^(?!.*aa).*$/;
    if (regex.test(value)) {
      setMessage("Accepted: No consecutive 'a's.");
    } else {
      setMessage("Declined: String contains consecutive 'a's.");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    validateInput(value);
  };

  return (
    <div>
      <h2>Accept all string that has no consecutive 'a'</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter a string"
        style={{
          padding: "10px",
          fontSize: "16px",
          width: "300px",
          marginBottom: "10px",
        }}
      />
      <p style={{ color: message.includes("Accepted") ? "green" : "red" }}>
        {message}
      </p>
      <table style={{ margin: "20px auto", borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Examples</th>
            <th style={tableHeaderStyle}>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>abc</td>
            <td style={acceptedCellStyle}>Accepted</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>bcd</td>
            <td style={acceptedCellStyle}>Accepted</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>aabc</td>
            <td style={rejectedCellStyle}>Rejected</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>aa</td>
            <td style={rejectedCellStyle}>Rejected</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const tableHeaderStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    textAlign: "left",
    backgroundColor: "#f4f4f4",
  };
  
  const tableCellStyle = {
    border: "1px solid #ddd",
    padding: "10px",
  };
  
  const acceptedCellStyle = {
    ...tableCellStyle,
    color: "green",
  };
  
  const rejectedCellStyle = {
    ...tableCellStyle,
    color: "red",
  };
  

export default RegexValidator2;
