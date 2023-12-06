import React, { useState ,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const API_URL_GET = 'http://localhost:8088/api/Students';
const API_URL_ADD = 'http://localhost:8088/api/Students/{id}';

// Students api

//     http://localhost:8088/api/Students (GET, POST)

// Available Methods:
// GET: Get all Students
// Post: Add a new Student with Basic Details Only


//     http://localhost:8088/api/Students/{id} (PUT)

// Available Methods:
// PUT: Updates a Student’s Basic Details only


//     http://localhost:8088/api/Students/{id}/Nationality/{id}

// Available Methods:
// GET: Gets the Nationality of a particular student
// Put: Updates a Student’s Nationality


//     http://localhost:8088/api/Students/{id}/FamilyMembers/

// Available Methods:
// GET: Gets Family Members for a particular Student
// POST: Creates a new Family Member for a particular Student (without the nationality)

// FamilyMembers

//     http://localhost:8088/api/FamilyMembers/{id}

// Available Methods:
// PUT: Updates a particular Family Member
// DELETE: Deletes a family member for a particular Student


//     http://localhost:8088/api/FamilyMembers/{id}/Nationality/{id}

// Available Methods:
// GET: Gets a nationality associated with a family member
// PUT: Updates a particular Family Member’s Nationality

// Nationality

//     http://localhost:8088/api/Nationalities (GET)

// GET: Gets all nationalities in the system



const Students = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isShowPopUpOpen, setShowPopUpOpen] = useState(false);

  const [siblingDetails, setSiblingDetails] = useState({
      firstName: '',
      lastName: '',
      dateOfBirth:new Date(),
      relationship:'',
  });

  const handleClick = (studentId) => {
    const studentToEdit = studentData.find((student) => student.id === studentId);
    setNewStudent({ ...studentToEdit });
    setEditing(true);
    setEditingStudentId(studentId);
    showPopup();
  };

  const [studentData, setStudentData] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', nationality: 'American', dateOfBirth: '1995-05-15', relationship: 'Parent' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', nationality: 'Canadian', dateOfBirth: '1998-08-22', relationship: 'Parent' },
    { id: 3, firstName: 'Alice', lastName: 'Smith', nationality: 'British', dateOfBirth: '1997-02-10', relationship: 'Sibling' },
  ]);

  const countries = ['American', 'Canadian', 'British', 'Other'];

  const relationship =['Parent','Sibling','Spouse'];

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

  const popupContainerStyle = {
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  };

  const formContainerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '800px', 
    margin: '0 auto',
  };

  const addbutton = {
    borderRadius: '5px',
    backgroundColor: 'black',
    color: '#fff',
    border: '0px ',
    padding: '10px 20px',
    marginTop: '20px',
  };
  
  const formColumnStyle = {
    flex: 1,
    padding: '0 20px',
  };
  const closeButtonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  };

  const formRowStyle = {
    display: 'flex',
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

  const editButtonStyle = {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  };
  
  const deleteButtonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  };
  
  const approveButtonStyle = {
    backgroundColor: '#2ecc71',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  };
  
  const cancelButtonStyle = {
    backgroundColor: '#e74c3c',
    color: '#fff',
    padding: '8px 12px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  };

  const buttonContainerStyle = {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-end',
  };
  const showPopup = () => {
    setShowPopUpOpen(true);
  };

  const closedPopup = () => {
    setShowPopUpOpen(false);
  };

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setNewStudent({ ...newStudent, dateOfBirth: date });
  };

  const handleSiblingDetailsChange = (e) => {
    setSiblingDetails({ ...siblingDetails, [e.target.name]: e.target.value });
  };

  const [students, setStudents] = useState([]);

  const [newStudent, setNewStudent] = useState({
    slNo: "",
    firstName: '',
    lastName: '',
    nationality: '',
    dateOfBirth: new Date(),
    relationship: '',
  });

  const fetchStudents = () => {
    
    axios.get(API_URL_GET)
    .then(response => {
        const fetchedStudents = response.data.map((student, index) => ({
            ...student,
            slNo: index + 1
        }));
        console.log("Fetched students:", fetchedStudents);
        setStudents(fetchedStudents);
    })
    .catch(error => console.error('Error fetching items:', error));
};

useEffect(() => {
  fetchStudents();
}, []);


  const handleAddStudent = () => {
    if (newStudent.firstName && newStudent.lastName && newStudent.nationality && 
      newStudent.dateOfBirth && newStudent.relationship ) {
        const studentToAdd = {
          firstName: newStudent.firstName,
          lastName:newStudent.lastName,
          nationality: newStudent.nationality,
          dateOfBirth: newStudent.dateOfBirth,
          relationship: newStudent.relationship,
        };

        axios.put(API_URL_ADD, studentToAdd)
        .then(response => {
            console.log('Add student result:', response.data);
            fetchStudents();
            setNewStudent({
              firstName: "",
              lastName:"",
              nationality: "",
              dateOfBirth: "",
              relationship: "",
            });
        })
        .catch(error => {
            console.error('Error adding student:', error.response ? error.response.data : error.message);
        });
    } else {
        console.error('Invalid student data');
    }
};

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const [isEditing, setEditing] = useState(false);
  const [editingStudentId, setEditingStudentId] = useState(null);
  const handleEditClick = (studentId) => {
    const studentToEdit = studentData.find((student) => student.id === studentId);
    setNewStudent({ ...studentToEdit });
    setEditing(true);
    setEditingStudentId(studentId);
    openPopup();
  };

  const handleDeleteClick = (studentId) => {
    const updatedStudentData = studentData.filter((student) => student.id !== studentId);
    setStudentData(updatedStudentData);
  };

  const handleApproveClick = (studentId) => {
    console.log(`Student with ID ${studentId} approved.`);
  };

  const handleAddOrUpdateStudent = () => {
    if (isEditing) {
      const updatedStudentData = studentData.map((student) =>
        student.id === editingStudentId ? { ...newStudent, id: editingStudentId } : student
      );
      setStudentData(updatedStudentData);
      setEditing(false);
    } else {
      const newId = studentData.length + 1;
      setStudentData([...studentData, { id: newId, ...newStudent }]);
    }

    setNewStudent({
      firstName: '',
      lastName: '',
      nationality: '',
      dateOfBirth: new Date(),
      relationship: '',
    });
    setSiblingDetails({
      firstName: '',
      lastName: '',
      dateOfBirth:new Date(),
      relationship:'',
    });
    closePopup();
  };


  const handleCancelEdit = () => {
    setEditing(false);
    setEditingStudentId(null);
    setNewStudent({
      firstName: '',
      lastName: '',
      nationality: '',
      dateOfBirth: new Date(),
      relationship: '',
    });
    setSiblingDetails({
      firstName: '',
      lastName: '',
      dateOfBirth:new Date(),
      relationship:'',
    });
    closePopup();
  };



  return (
    <div style={listStyle}>
      <h2 style={{ color: '#3498db', marginTop: '50px' }}>Student Dashboard</h2>
      <table style={tableStyle}>
        <thead style={headerStyle}>
          <tr>
            <th style={thTdStyle}>Sl No</th>
            <th style={thTdStyle}>First Name</th>
            <th style={thTdStyle}>Last Name</th>
            <th style={thTdStyle}>Nationality</th>
            <th style={thTdStyle}>Date of Birth</th>
            <th style={thTdStyle}>Family Member</th>
            <th  style={thTdStyle}></th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td style={thTdStyle}>{student.id}</td>
              <td style={thTdStyle}><button style={{borderRadius:'5PX',background:'#3498db',margin:'0 10px',border:'0',padding:"5px 10px"}} 
              onClick={() => handleClick(student.id)}>{student.firstName}</button>
              </td>
              <td style={thTdStyle}>{student.lastName}</td>
              <td style={thTdStyle}>{student.nationality}</td>
              <td style={thTdStyle}>{student.dateOfBirth}</td>
              <td style={thTdStyle}>{student.relationship}</td>
              <td style={thTdStyle}>
                {isEditing && editingStudentId === student.id ? (
                  <>
                    <button style={{borderRadius:'5PX',background:'Green',margin:'0 10px',border:'0',padding:"5px 10px"}} onClick={handleAddOrUpdateStudent}>Save</button>
                    <button style={{borderRadius:'5PX',background:'red',margin:'0 10px',border:'0',padding:"5px 10px"}} onClick={handleCancelEdit}>Cancel</button>
                  </>
                ) : (
                  <>
                    <button style={{borderRadius:'5PX',background:'#3498db',margin:'0 10px',border:'0',padding:"5px 10px"}} onClick={() => handleEditClick(student.id)}>Edit</button>
                    <button style={{borderRadius:'5PX',background:'grey',margin:'0 10px',border:'0',padding:"5px 10px"}} onClick={() => handleDeleteClick(student.id)}>Delete</button>
                    <button style={{borderRadius:'5PX',background:'green',margin:'0 10px',border:'0',padding:"5px 10px"}} onClick={() => handleApproveClick(student.id)}>Approve</button>
                  </>
                )}
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>

      
      <button style={addbutton} onClick={openPopup}>ADD STUDENTS</button>

      
      {isShowPopUpOpen && (
        <div style={popupContainerStyle} onClick={closedPopup}>
          <span style={{ ...closeButtonStyle, float: 'right' }} onClick={closedPopup}>
            &times;
          </span>
          <div style={formContainerStyle} onClick={(e) => e.stopPropagation()}>
            <div style={formColumnStyle}>
              <h4> Student Information</h4>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  First Name:
                  <input style={inputStyle} type="text" name="firstName"  placeholder='First Name' value={newStudent.firstName}   readOnly onChange={handleInputChange} />
                </label>

                <label style={labelStyle}>
                  Last Name:
                  <input style={inputStyle} type="text" name="lastName"  placeholder='Last Name' value={newStudent.lastName} readOnly onChange={handleInputChange} />
                </label>
              </div>

              <div style={formRowStyle}>
                <label style={labelStyle}>
                  Nationality:
                  <select style={selectStyle} name="nationality" value={newStudent.nationality}     disabled    onChange={handleInputChange}>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </label>

                <label style={labelStyle}>
                  <span style={{ marginTop: '25px' }}>Date of Birth:</span>
                  <br />
                  <input style={inputStyle} type="date" name="dateOfBirth" readOnly  value={newStudent.dateOfBirth} onChange={handleInputChange} />
                </label>
              </div>

            </div>

            <div style={formColumnStyle}>
              <h4> Family Information</h4>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  First Name:
                  <input style={inputStyle} type="text"  readOnly name="firstName"  placeholder='First Name' value={siblingDetails.firstName} onChange={handleSiblingDetailsChange} />
                </label>

                <label style={labelStyle}>
                  Last Name:
                  <input style={inputStyle} type="text" readOnly placeholder='Last Name' name="lastName" value={siblingDetails.lastName} onChange={handleSiblingDetailsChange} />
                </label>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  Relationship:
                  <select style={selectStyle} name="relationship"  disabled value={siblingDetails.nationality} onChange={handleSiblingDetailsChange}>
                    {relationship.map((relationships, index) => (
                      <option key={index} value={relationships}>
                        {relationships}
                      </option>
                    ))}
                  </select>
                </label>

                <label style={labelStyle}>
                  <span style={{ marginTop: '25px' }}>Date of Birth:</span>
                  <br />
                  <input style={inputStyle} type="date" readOnly name="dateOfBirth" value={siblingDetails.dateOfBirth} onChange={handleSiblingDetailsChange} />
                </label>
              </div>
              

              <div style={buttonContainerStyle}>
                
                <button style={closeButtonStyle} onClick={closedPopup}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isPopupOpen && (
        <div style={popupContainerStyle} onClick={closePopup}>
          
          <div style={formContainerStyle} onClick={(e) => e.stopPropagation()}>
          <span style={{ ...closeButtonStyle, float: 'right' }} onClick={closePopup}>
            &times;
          </span>
            <div style={formColumnStyle}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Add New Student</h3>
              <h4> Student Information</h4>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  First Name:
                  <input style={inputStyle} type="text" placeholder='First Name'
                  name="firstName" value={newStudent.firstName} 
                  onChange={handleInputChange} />
                </label>
                <label style={labelStyle}>
                  Last Name:
                  <input style={inputStyle} type="text"  placeholder='Last Name' name="lastName" value={newStudent.lastName} onChange={handleInputChange} />
                </label>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  Nationality:
                  <select style={selectStyle} name="nationality" value={newStudent.nationality} onChange={handleInputChange}>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </label>

                <label style={labelStyle}>
                  <span style={{ marginTop: '25px' }}>Date of Birth:</span>
                  <br />
                  <input style={inputStyle} type="date" name="dateOfBirth" value={newStudent.dateOfBirth} onChange={handleInputChange} />
                </label>
              </div>
            </div>

            <div style={formColumnStyle}>
              <h4> Family Information</h4>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  First Name:
                  <input style={inputStyle} type="text"   placeholder='First Name' name="firstName" value={siblingDetails.firstName} onChange={handleSiblingDetailsChange} />
                </label>

                <label style={labelStyle}>
                  Last Name:
                  <input style={inputStyle} type="text" name="lastName"  placeholder='Last Name' value={siblingDetails.lastName} onChange={handleSiblingDetailsChange} />
                </label>
              </div>
              <div style={formRowStyle}>
                <label style={labelStyle}>
                  Relationship:
                  <select style={selectStyle} name="relationship" value={siblingDetails.nationality} onChange={handleSiblingDetailsChange}>
                    {relationship.map((relationships, index) => (
                      <option key={index} value={relationships}>
                        {relationships}
                      </option>
                    ))}
                  </select>
                </label>

                <label style={labelStyle}>
                  <span style={{ marginTop: '25px' }}>Date of Birth:</span>
                  <br />
                  <input style={inputStyle} type="date" name="dateOfBirth" value={siblingDetails.dateOfBirth} onChange={handleSiblingDetailsChange} />
                </label>
              </div>
              

              <div style={buttonContainerStyle}>
                <button style={buttonStyle} onClick={handleAddStudent}>
                  Add Student
                </button>
                <button style={closeButtonStyle} onClick={closePopup}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Students;








