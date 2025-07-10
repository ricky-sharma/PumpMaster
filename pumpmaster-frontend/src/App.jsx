import axios from "axios";
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './axiosConfig';
import Header from './components/Header';
import Login from './pages/Login';
import PumpPage from './pages/PumpPage';
import PumpsList from './pages/PumpsList';

export default function App() {
    const [token, setToken] = useState(() => localStorage.getItem('token'));

    const handleLogout = () => {
        setToken(null);
        delete axios.defaults.headers.common['Authorization'];
        localStorage.removeItem('token');
        window.location.href = '/';
    };

    return (
        <Router>
            <Header isLoggedIn={!!token} onLogout={handleLogout} />
            <main className="min-h-screen bg-gray-50">
                <Routes>
                    <Route path="/" element={<Login setToken={setToken} />} />
                    <Route path="/pumps" element={<PumpsList />} />
                    <Route path="/pump-page" element={<PumpPage />} />
                </Routes>
            </main>
        </Router>
    );
}
