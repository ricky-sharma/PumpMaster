import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header({ isLoggedIn, onLogout }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-300 shadow-sm">
            <div className="max-w-screen px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3 space-x-2">
                    {/* Left: Logo + Name */}
                    <div className="flex items-center space-x-30">
                        <div className="flex items-center space-x-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600 mt-[1px]"
                                fill="currentColor"
                                viewBox="0 0 28 28"
                            >
                                <path d="M13.863 4.094c.395-1.215 2.11-1.215 2.505 0l1.693 5.216a1 1 0 00.95.69h5.482c1.271 0 1.798 1.63.77 2.379l-4.442 3.22a1 1 0 00-.364 1.118l1.692 5.215c.395 1.215-1.003 2.223-2.117 1.476l-4.442-3.22a1 1 0 00-1.175 0l-4.442 3.22c-1.113.747-2.511-.26-2.116-1.476l1.692-5.215a1 1 0 00-.364-1.118l-4.442-3.22c-1.028-.75-.5-2.38.77-2.38h5.482a1 1 0 00.95-.69l1.693-5.216z" />
                            </svg>
                            <h1 className="text-2xl font-semibold text-gray-800 leading-none flex items-center">
                                PumpMaster
                            </h1>
                        </div>
                        <div className="hidden md:flex items-center space-x-6">
                            {isLoggedIn && (
                                <ul className="flex space-x-6 text-sm font-medium text-gray-700">
                                    <li><Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
                                    <li><Link to="/pumps" className="hover:text-blue-600">Pumps</Link></li>
                                    <li><Link to="/reports" className="hover:text-blue-600">Reports</Link></li>
                                    <li><Link to="/alerts" className="hover:text-blue-600">Alerts</Link></li>
                                </ul>
                            )}
                        </div>
                    </div>
                    {isLoggedIn && (
                        <>
                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
                            >
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>

                            {/* Desktop Navigation + Icons */}
                            <div className="hidden md:flex items-center space-x-6">
                                {/* Search box */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="pl-9 pr-3 py-1.5 border rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                                    />
                                    <svg
                                        className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M21 21l-4.35-4.35M16.5 10.5a6 6 0 11-12 0 6 6 0 0112 0z" />
                                    </svg>
                                </div>
                                {/* Notification bell */}
                                <button className="text-yellow-600 hover:text-blue-600 cursor-pointer" title="Notifications">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5m6 0v1a3 3 0 11-6 0v-1" />
                                    </svg>
                                </button>
                                {/* Sign out icon */}
                                <button onClick={onLogout} className="text-red-700 hover:text-red-800 cursor-pointer" title="Sign Out">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1" />
                                    </svg>
                                </button>
                            </div>
                        </>)}
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <nav className="md:hidden my-4 border-t border-gray-200 pt-3">
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><Link to="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link></li>
                            <li><Link to="/pumps" onClick={() => setIsOpen(false)}>Pumps</Link></li>
                            <li><Link to="/reports" onClick={() => setIsOpen(false)}>Reports</Link></li>
                            <li><Link to="/alerts" onClick={() => setIsOpen(false)}>Alerts</Link></li>
                            <li><button onClick={() => { setIsOpen(false); onLogout(); }} className="text-left w-full text-red-600">Sign Out</button></li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
