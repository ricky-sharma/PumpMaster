/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { login } from "../services/api";
import { useNavigate } from 'react-router-dom';

export default function Login({ setToken }) {
    const [username, setUsername] = useState("test");
    const [password, setPassword] = useState("test");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const res = await login(username, password);
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
            navigate('/pumps');
        } catch (err) {
            alert("Invalid credentials");
        }
    };


    return (
        <div className="min-h-screen w-full bg-gray-100 flex flex-col">
            {/* Login Form */}
            <div className="flex-grow flex items-center justify-center">
                <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Welcome Back</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>
                        <p className="mt-4 text-center text-gray-600">
                            Don't have an account?{' '}
                            <a href="#" className="text-blue-600 hover:underline">
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}