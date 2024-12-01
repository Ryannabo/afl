import React, { useState } from "react";

function RegexValidator() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");

  const validateInput = (value) => {
    const regex = /^a.*b$/;
    if (regex.test(value)) {
      setMessage("Accepted: String starts with 'a' and ends with 'b'.");
    } else {
      setMessage("Declined: String does not match the criteria.");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    validateInput(value);
  };

  return (
    <div>
      <h2>Accept all string that starts with 'a' and ends with 'b'</h2>
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
            <td style={tableCellStyle}>ab</td>
            <td style={acceptedCellStyle}>Accepted</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>a123b</td>
            <td style={acceptedCellStyle}>Accepted</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>abc</td>
            <td style={rejectedCellStyle}>Rejected</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>b123a</td>
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

export default RegexValidator;
