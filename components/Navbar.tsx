import React, { useState, useEffect } from "react";
import Router from "next/router";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import gifLogo from "../public/assets/DataMilk.gif";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        localStorage.setItem("isOpen", JSON.stringify(isOpen));
    };

    useEffect(() => {
        const storedIsOpen = localStorage.getItem("isOpen");
        if (storedIsOpen !== null) {
            setIsOpen(JSON.parse(storedIsOpen));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("isOpen", JSON.stringify(isOpen));
    }, [isOpen]);

    // Define animation
    const buttonVariants = {
        open: { rotate: 90 },
        closed: { rotate: 0 },
    };

    return (
        <nav className="bg-gray-800">
            <div className="px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src={gifLogo}
                                alt="My Logo"
                                className="w-auto h-10"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                            <Link
                                href="/"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 active:bg-gray-200`}
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 active:bg-gray-200`}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 active:bg-gray-200`}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/services"
                                className={`px-3 py-2 text-sm font-medium text-white rounded-md hover:text-gray-300 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 active:bg-gray-200`}
                            >
                                Services
                            </Link>
                        </div>
                    </div>
                    <div className="flex -mr-2 md:hidden">
                        <motion.button
                            onClick={toggleNavbar}
                            type="button"
                            className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            variants={buttonVariants}
                            animate={isOpen ? "open" : "closed"}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                <div className="flex items-center justify-center flex-1 md:items-stretch md:justify-start">
                    <div className="flex-shrink-0">
                        <div className="md:block md:ml-6">
                            <div className="flex space-x-4">
                                <Link
                                    href="/"
                                    className={`px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about"
                                    className={`px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    className={`px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </Link>
                                <Link
                                    href="/services"
                                    className={`px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
