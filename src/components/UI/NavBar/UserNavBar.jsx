import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../../public/logo.svg";
import { menuLinks } from "../../../../data.jsx";
import MultiLevelMenu from "./MultiLevelMenu.jsx";  

export default function UserNavbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [q, setQ] = useState("");
    const navigate = useNavigate();

    function submitSearch(e) {
        e.preventDefault();
        const query = q.trim();
        if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
        else navigate("/search");
        setMobileOpen(false);
    }

    return (
        <header className="w-full shadow-xs bg-white">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <Link to="/" className="flex items-center space-x-3">
                        <img src={logo} alt="4 Wheeler Logo" className="h-8" />
                    </Link>

                    <nav className="hidden md:block">
                        <ul className="flex space-x-6 text-sm font-semibold">
                            {menuLinks.map((m) => (
                                <li key={m.path}>
                                    <NavLink
                                        to={m.path}
                                        className={({ isActive }) =>
                                            `hover:text-blue-600 cursor-pointer ${isActive ? "text-blue-600" : "text-gray-700"}`
                                        }
                                    >
                                        {(m.name === "Old Cars" || m.name === "New Cars")? <MultiLevelMenu name={m.name}/> : m.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className="flex-1 px-4 hidden lg:block">
                    <form onSubmit={submitSearch} className="relative max-w-xl mx-auto">
                        <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="search"
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search by brand or model..."
                            className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
                        />
                    </form>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="hidden sm:flex items-center space-x-3 text-sm">
                        <div>
                            <Link to="/login" className="text-gray-500 hover:text-blue-600">
                                Login
                            </Link>
                            <span> / </span>
                            <Link to="/register" className="text-gray-500 hover:text-blue-600">
                                Register
                            </Link>
                        </div>

                        <Link
                            to="/post"
                            className="bg-blue-600 text-white rounded-full px-4 py-2 flex items-center text-sm font-semibold"
                        >
                            Post
                        </Link>
                    </div>

                    <button
                        type="button"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen((v) => !v)}
                        className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                    >
                        {mobileOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </button>
                </div>
            </div>

            {/* mobile menu */}
            {mobileOpen && (
                <div className="lg:hidden border-t bg-white">
                    <div className="px-4 py-3 space-y-3">
                        <form onSubmit={submitSearch} className="relative">
                            <AiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="search"
                                value={q}
                                onChange={(e) => setQ(e.target.value)}
                                placeholder="Search by brand or model..."
                                className="w-full bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none"
                            />
                        </form>

                        <nav>
                            <ul className="flex flex-col space-y-2 text-sm font-medium">
                                {menuLinks.map((m) => (
                                    <li key={m.path}>
                                        <NavLink
                                            to={m.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={({ isActive }) =>
                                                `block px-2 py-2 rounded ${isActive ? "text-blue-600 bg-gray-50" : "text-gray-700 hover:bg-gray-50"}`
                                            }
                                        >
                                            {m.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex space-x-3">
                            <Link
                                to="/login"
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 text-center py-2 rounded text-gray-700 hover:bg-gray-50"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                onClick={() => setMobileOpen(false)}
                                className="flex-1 text-center py-2 rounded text-gray-700 hover:bg-gray-50"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}


// sau này chia lại các component nhỏ hơn rồi chuyền vào các thông số khi cần 