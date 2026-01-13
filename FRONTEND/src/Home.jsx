import React, { useState } from "react";
import {
    ArrowRight,
    ChevronRight,
    Mail,
    Phone,
    MessageCircle,
    Globe,
    Shield,
    Code,
    ShoppingCart,
    BarChart,
    Cpu,
    Target,
    Layout,
    Clock,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import HeroSection from "./assets/hero-section-img.png";

const Home = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        const message = `
Name: ${formData.name}
Company: ${formData.company}
Message: ${formData.message}
`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");

        setFormData({ name: "", email: "", company: "", message: "" });
    };

    const whatsappNumber = "917984297663";

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hi, I visited the Vexora Solutions website and want to discuss a project."
    )}`;

    return (
        <div className="bg-white text-gray-800 font-sans">
            <Navbar />

            {/* HERO */}
            <section className="py-5 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT CONTENT */}
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B2C4D] mb-6 leading-tight">
                            Reliable Digital
                            <span className="block text-[#4A5D73] mt-2">
                                Systems for Modern Businesses
                            </span>
                        </h1>

                        <p className="max-w-xl text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                            We design and develop clean, scalable web solutions that help businesses
                            streamline operations and build systems they can rely on.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => window.open(whatsappLink, "_blank")}
                                className="bg-[#0B2C4D] text-white px-8 py-4 rounded-md hover:bg-[#2EA4FF]"
                            >
                                Request Demo
                            </button>
                        </div>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={HeroSection}
                            alt="Vexora Solutions – Digital Systems"
                            className="w-full max-w-md lg:max-w-lg"
                        />
                    </div>

                </div>
            </section>

            {/* SERVICES */}
            <section id="services" className="py-28 bg-gray-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Comprehensive digital solutions tailored to your business needs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((s, i) => (
                            <div
                                key={i}
                                className="bg-white border border-gray-200 rounded-lg p-8 hover:border-gray-300 hover:shadow-sm transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
                                    {React.createElement(s.icon, {
                                        size: 24,
                                        className: "text-gray-700 group-hover:text-white transition-colors"
                                    })}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {s.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{s.description}</p>
                                <NavLink
                                    to={whatsappLink}
                                    target="_blank"
                                    className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900"
                                >
                                    Discuss on WhatsApp
                                    <ChevronRight size={16} className="ml-1" />
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS */}
            <section id="process" className="py-28 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A structured approach to ensure quality and timely delivery
                        </p>
                    </div>

                    <div className="relative">
                        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2"></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {process.map((step, i) => (
                                <div key={i} className="relative">
                                    <div className="bg-white border border-gray-200 rounded-lg p-8 text-center hover:shadow-sm transition-shadow duration-300">
                                        <div className="w-14 h-14 mx-auto bg-gray-900 text-white flex items-center justify-center rounded-lg mb-6 font-bold text-lg">
                                            {i + 1}
                                        </div>
                                        <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-50">
                                            {React.createElement(step.icon, {
                                                size: 24,
                                                className: "text-gray-700"
                                            })}
                                        </div>
                                        <h4 className="font-semibold text-gray-900 mb-3 text-lg">
                                            {step.title}
                                        </h4>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* PRICING */}
            <section className="py-28 bg-gray-50 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Pricing Approach
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Every project is different. Our pricing depends on scope, complexity, and timeline.
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Starter Website", price: "Starting from ₹15,000" },
                            { title: "Business Website", price: "Starting from ₹30,000" },
                            { title: "E-commerce", price: "Starting from ₹45,000" },
                            { title: "Custom Systems", price: "Let’s Discuss" },
                        ].map((item, i) => (
                            <div key={i} className="bg-white border border-gray-200 rounded-lg p-8">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-700 mb-6">{item.price}</p>
                                <NavLink
                                    to={whatsappLink}
                                    className="inline-flex items-center justify-center w-full border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition"
                                >
                                    Get Pricing on WhatsApp
                                </NavLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-28 px-6">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
                        Frequently Asked Questions
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                q: "How long does a project take?",
                                a: "Most projects take 2–6 weeks depending on scope and requirements."
                            },
                            {
                                q: "Do you provide maintenance?",
                                a: "Yes. We offer optional ongoing maintenance and support plans."
                            },
                            {
                                q: "Can you work with an existing website?",
                                a: "Absolutely. We can improve, redesign, or extend existing systems."
                            },
                            {
                                q: "How does payment work?",
                                a: "Typically split into milestones — advance, mid-project, and final delivery."
                            }
                        ].map((item, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 mb-2">{item.q}</h4>
                                <p className="text-gray-600">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-28 bg-gray-900 text-white px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to Transform Your Digital Presence?
                    </h2>
                    <p className="text-gray-300 mb-10 text-lg">
                        Let's discuss how we can help you build efficient, scalable solutions
                        that drive real business results.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            onClick={() => window.open(whatsappLink, "_blank")}
                            className="bg-white text-gray-900 px-10 py-4 rounded-md"
                        >
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="py-28 px-6">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-gray-600 mb-10">
                                Have a project in mind? Let's discuss how we can help bring your
                                vision to life with our expertise and proven methodology.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Mail, text: "vexoraservices@gmail.com" },
                                    { icon: Phone, text: "+91 7984297663" },
                                    { icon: MessageCircle, text: "Available Mon–Sat, 10AM – 7PM IST" }
                                ].map((contact, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mr-4">
                                            <contact.icon size={20} className="text-gray-700" />
                                        </div>
                                        <span className="text-gray-700">{contact.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send us a message</h3>
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                                    <input
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                                        placeholder="John Doe"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                    <input
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                                        placeholder="john@company.com"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                                    <input
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white"
                                        placeholder="Your company name"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                                    <textarea
                                        className="w-full border border-gray-300 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent bg-white h-40"
                                        placeholder="Tell us about your project requirements"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button className="w-full bg-gray-900 text-white py-4 rounded-md hover:bg-gray-800 transition-colors duration-200 text-sm font-medium flex items-center justify-center">
                                    Send Message
                                    <ArrowRight className="ml-3" size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

const services = [
    {
        title: "Website Development",
        description: "Modern, fast and responsive websites built with clean, maintainable code and SEO best practices.",
        icon: Globe
    },
    {
        title: "E-commerce Solutions",
        description: "Custom online stores with secure payment integrations and intuitive admin panels.",
        icon: ShoppingCart
    },
    {
        title: "Admin Dashboards",
        description: "Internal dashboards for data visualization, user management and business analytics.",
        icon: BarChart
    },
    {
        title: "Automation & APIs",
        description: "Automate workflows and connect systems using robust API integrations.",
        icon: Cpu
    },
    {
        title: "Messaging Integration",
        description: "Customer engagement through WhatsApp/SMS automation and notifications.",
        icon: MessageCircle
    },
    {
        title: "Maintenance & Support",
        description: "Ongoing updates, performance optimization and dedicated technical support.",
        icon: Shield
    },
];

const process = [
    {
        title: "Discovery",
        desc: "Deep dive into your requirements, goals and technical constraints.",
        icon: Target
    },
    {
        title: "Planning",
        desc: "Create detailed specifications, architecture and project roadmap.",
        icon: Layout
    },
    {
        title: "Development",
        desc: "Iterative development with regular updates and quality assurance.",
        icon: Code
    },
    {
        title: "Delivery",
        desc: "Deployment, training and ongoing support for seamless operation.",
        icon: Clock
    },
];



export default Home;