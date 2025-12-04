import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>TELEGA 2.0</h1>
            </div>
            <div className="navbar-right">
                <span className="user-email">{user?.email}</span>
                <button onClick={handleLogout} className="logout-btn">
                    Logout
                </button>
            </div>
        </nav>
    );
};

export default Navbar;