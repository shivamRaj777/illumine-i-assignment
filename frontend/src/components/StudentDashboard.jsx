import { useState } from 'react';
import '../styles/StudentDashboard.css';

const StudentDashboard = () => {
    const [studentDetails, setStudentDetails] = useState({
        profilePic: 'https://via.placeholder.com/150',
        firstName: 'John',
        lastName: 'Doe',
        dob: '2000-01-01',
        gender: 'Male',
        bloodGroup: 'O+',
        contactNumber: '1234567890',
        address: '123 Street, City',
    });

    const [subjects, setSubjects] = useState([
        { name: 'Mathematics', faculty: 'Dr. Smith' },
        { name: 'Physics', faculty: 'Dr. Johnson' },
    ]);

    const [isEditing, setIsEditing] = useState(false);

    const handleEditDetails = (key, value) => {
        setStudentDetails({ ...studentDetails, [key]: value });
    };

    return (
        <div className="student-dashboard">
            <h2>Student Dashboard</h2>
            <div className="student-profile">
                <img src={studentDetails.profilePic} alt="Profile" />
                <div className="details">
                    <h3>Your Details</h3>
                    {Object.entries(studentDetails).map(([key, value]) =>
                        key !== 'profilePic' ? (
                            <div key={key} className="detail-item">
                                <label>{key.replace(/([A-Z])/g, ' $1')}: </label>
                                {isEditing ? (
                                    <input
                                        type={key === 'dob' ? 'date' : 'text'}
                                        value={value}
                                        onChange={(e) => handleEditDetails(key, e.target.value)}
                                    />
                                ) : (
                                    <span>{value}</span>
                                )}
                            </div>
                        ) : null
                    )}
                </div>
                <button
                    className="toggle-edit-btn"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? 'Save Details' : 'Edit Details'}
                </button>
            </div>

            <h3>Subjects</h3>
            <ul>
                {subjects.map((subject, index) => (
                    <li key={index}>
                        {subject.name} - Faculty: {subject.faculty}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentDashboard;
