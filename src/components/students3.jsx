import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Students = () => {
  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    dateOfBirth: new Date(),
    relationship: '',
  });

  const [studentData, setStudentData] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', nationality: 'American', dateOfBirth: '1995-05-15', relationship: 'Parent' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', nationality: 'Canadian', dateOfBirth: '1998-08-22', relationship: 'Parent' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', nationality: 'British', dateOfBirth: '1997-02-10', relationship: 'Parent' },
  ]);

  const countries = ['American', 'Canadian', 'British', 'Other'];

  const listStyle = {
    width: '100%',
    margin: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thTdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
  };

  const headerStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
  };

  const formContainerStyle = {
    marginTop: '20px',
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  };

  const labelStyle = {
    flex: '1',
    marginRight: '15px',
    color: '#333',
    fontWeight: 'bold',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '8px 0',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
  };

  const selectStyle = {
    ...inputStyle,
  };

  const buttonStyle = {
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
    textAlign: 'right',
  };

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setNewStudent({ ...newStudent, dateOfBirth: date });
  };

  const handleAddStudent = () => {
    const newId = studentData.length + 1;
    setStudentData([...studentData, { id: newId, ...newStudent }]);
    setNewStudent({
      firstName: '',
      lastName: '',
      nationality: '',
      dateOfBirth: new Date(),
      relationship: '',
    });
  };

  return (
    <div style={listStyle}>
      <h2 style={{ color: '#3498db',marginTop:"50PX" }}>Student Dashboard</h2>
      <table style={tableStyle}>
        <thead style={headerStyle}>
          <tr>
            <th style={thTdStyle}>Sl No</th>
            <th style={thTdStyle}>First Name</th>
            <th style={thTdStyle}>Last Name</th>
            <th style={thTdStyle}>Nationality</th>
            <th style={thTdStyle}>Date of Birth</th>
            <th style={thTdStyle}>Family Member</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td style={thTdStyle}>{student.id}</td>
              <td style={thTdStyle}>{student.firstName}</td>
              <td style={thTdStyle}>{student.lastName}</td>
              <td style={thTdStyle}>{student.nationality}</td>
              <td style={thTdStyle}>{student.dateOfBirth}</td>
              <td style={thTdStyle}>{student.relationship}</td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default Students;
