
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">College Management</Link>
            </div>
            <div className="navbar-links">
                <Link to="/login">Login</Link>
            </div>
            
        </nav>
    );
};

export default Navbar;
