import  { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
    const [role, setRole] = useState('student');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`Login as ${role}: ${username}`);
    };

    return (
        <div className="login">
            <form onSubmit={handleLogin}>
                <h2>Login</h2>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <label>
                    Role:
                    <select value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                    </select>
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
