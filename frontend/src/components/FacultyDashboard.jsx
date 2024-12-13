import  { useState } from 'react';
import '../styles/FacultyDashboard.css';

const FacultyDashboard = () => {
    const [students, setStudents] = useState([
        { id: 1, name: 'John Doe', assigned: false },
        { id: 2, name: 'Jane Smith', assigned: true },
    ]);

    const [newStudent, setNewStudent] = useState('');
    const [updateStudentId, setUpdateStudentId] = useState(null);
    const [updateStudentName, setUpdateStudentName] = useState('');

    const handleAddStudent = () => {
        if (newStudent.trim()) {
            setStudents([...students, { id: Date.now(), name: newStudent, assigned: false }]);
            setNewStudent('');
        }
    };

    const handleAssignStudent = (id) => {
        setStudents(
            students.map((student) =>
                student.id === id ? { ...student, assigned: true } : student
            )
        );
    };

    const handleUpdateStudent = () => {
        setStudents(
            students.map((student) =>
                student.id === updateStudentId ? { ...student, name: updateStudentName } : student
            )
        );
        setUpdateStudentId(null);
        setUpdateStudentName('');
    };

    return (
        <div className="faculty-dashboard">
            <h2>Faculty Dashboard</h2>
            <div className="add-student">
                <input
                    type="text"
                    placeholder="Enter student name"
                    value={newStudent}
                    onChange={(e) => setNewStudent(e.target.value)}
                />
                <button onClick={handleAddStudent}>Add Student</button>
            </div>
            <h3>All Students</h3>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>
                        {student.name}{' '}
                        {!student.assigned && (
                            <button onClick={() => handleAssignStudent(student.id)}>
                                Assign to Me
                            </button>
                        )}
                        <button
                            onClick={() => {
                                setUpdateStudentId(student.id);
                                setUpdateStudentName(student.name);
                            }}
                        >
                            Update
                        </button>
                    </li>
                ))}
            </ul>
            {updateStudentId && (
                <div className="update-student">
                    <input
                        type="text"
                        placeholder="Update student name"
                        value={updateStudentName}
                        onChange={(e) => setUpdateStudentName(e.target.value)}
                    />
                    <button onClick={handleUpdateStudent}>Update</button>
                </div>
            )}
        </div>
    );
};

export default FacultyDashboard;
