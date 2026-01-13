import { Menu, X } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const whatsappNumber = "917984297663";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I visited the Vexora Solutions website and want to discuss a project."
    )}`;
    return (
        <nav className="p-2 sticky top-0 z-50 bg-white" >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <img src="./logo.png" alt="Logo" className="w-30" />
                </div>

                <div className="hidden md:flex items-center space-x-10 text-sm font-bold">
                    {["Home", "Services", "Process", "About", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`${item.toLowerCase() == "about" ? "/" + item.toLowerCase() : "/#" + item.toLowerCase()}`}
                            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gray-900 group-hover:w-full transition-all duration-300"></span>
                        </a>
                    ))}
                </div>

                <button
                    onClick={() => window.open(whatsappLink, "_blank")}

                    className="hidden md:block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-bold">
                    Get Started
                </button>

                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {
                menuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-4">
                        {["Services", "Process", "Work", "Contact"].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="block py-2 text-gray-700 hover:text-gray-900 transition-colors"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )
            }
        </nav >
    )
}

export default Navbar
