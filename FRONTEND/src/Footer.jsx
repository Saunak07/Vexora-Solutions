import React from 'react'
import { HashLink } from "react-router-hash-link";
import {NavLink} from "react-router-dom";
import Logo from "./assets/footer-logo.png";

const Footer = () => {
    const footerSections = [
        {
            title: "Services",
            links: [
                { label: "Web Development", href: "#services" },
                { label: "E-commerce Solutions", href: "#services" },
                { label: "Admin Dashboards", href: "#services" },
                { label: "Automation & Integration", href: "#services" },
                { label: "Maintenance & Support", href: "#services" }
            ]
        },
        {
            title: "Company",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Our Process", href: "/#process" },
                { label: "Contact", href: "/#contact" }
            ]
        },
        {
            title: "Legal",
            links: [
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms" }
            ]
        }
    ];
    return (
        <footer className="bg-gray-900 text-gray-300 py-16 px-6" >
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-10 mb-12">
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <img src={Logo} alt="Logo" className="w-24" />
                        </div>
                        <p className="text-gray-400">
                            Building reliable digital systems with a focus on quality and scalability.
                        </p>
                    </div>

                    {footerSections.map((section, i) => (
                        <div key={i}>
                            <h4 className="text-white font-semibold mb-6">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link, j) => (
                                    <li key={j}>
                                        <HashLink to={link.href} className="text-gray-400 hover:text-white transition-colors">
                                            {link.label}
                                        </HashLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Vexora Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer >
    )
}

export default Footer
