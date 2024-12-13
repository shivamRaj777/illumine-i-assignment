
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1 className="home-title">Welcome to College Management System</h1>
                <p className="home-description">
                    Manage students and faculties seamlessly. Log in as a faculty or student to access your dashboard.
                </p>
                <button className="home-button" onClick={() => window.location.href = "/login"}>
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Home;
