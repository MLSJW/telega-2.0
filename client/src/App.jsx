import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Chat from './components/Chat/Chat';
import Navbar from './components/Navbar';
import './styles/main.css';

function App() {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('http://localhost:3000/api/me', {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then(res => {
                if (res.ok) return res.json();
                throw new Error('Invalid token');
            })
            .then(data => setUser(data))
            .catch(() => {
                localStorage.removeItem('token');
            });
        }
    }, []);


    useEffect(() => {
        if (user) {
            fetch('http://localhost:3000/api/users', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })
            .then(res => res.json())
            .then(setUsers)
            .catch(console.error);
        }
    }, [user]);


    if (!user) {
        return (
            <div className="app">
                <Routes>
                    <Route path="/login" element={<Login setUser={setUser} />} />
                    <Route path="/register" element={<Register setUser={setUser} />} />
                    <Route path="*" element={<Navigate to="/login" />} />
                </Routes>
            </div>
        );
    }

    return (
        <div className="app">
            <Navbar user={user} setUser={setUser} />
            <div className="main-content">
                <div className="users-list">
                    <h3>Contacts</h3>
                    {users.filter(u => u.id !== user.id).map(u => (
                        <div
                            key={u.id}
                            className={`user-item ${selectedUser?.id === u.id ? 'selected' : ''}`}
                            onClick={() => setSelectedUser(u)}
                        >
                            <div className="user-avatar">{u.username?.[0]?.toUpperCase() || 'U'}</div>
                            <div className="user-info">
                                <strong>{u.username}</strong>
                                <small>{u.email}</small>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="chat-section">
                    {selectedUser ? (
                        <Chat currentUser={user} selectedUser={selectedUser} />
                    ) : (
                        <div className="select-user-prompt">
                            <h2>Welcome to TELEGA 2.0!</h2>
                            <p>Select a contact from the list to start messaging</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;