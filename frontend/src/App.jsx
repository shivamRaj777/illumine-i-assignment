
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './components/Login';
import FacultyDashboard from './components/FacultyDashboard';
import StudentDashboard from './components/StudentDashboard';
import NotFound from './pages/NotFound';
import './styles/Global.css';


function App() {
    return (
        <Router>
            <Navbar />
            <div className='main-content'>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/faculty" element={<FacultyDashboard />} />
                <Route path="/student" element={<StudentDashboard />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            </div>
        </Router>
    );
}

export default App;
