import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CgMonday } from "react-icons/cg";
import { motion } from "framer-motion";

const NavItem: FunctionComponent<{
    activeItem: string;
    setActiveItem: Function;
    name: string;
    route: string;
}> = ({ activeItem, setActiveItem, name, route }) => {
    return activeItem !== name ? (
        <Link
            className="block px-4 py-1 font-semibold text-gray-400 md:p-2 lg:px-4"
            href={route}
        >
            <span onClick={() => setActiveItem(name)}>
                <motion.span whileHover={{ scale: 1.1 }}>{name}</motion.span>
            </span>
        </Link>
    ) : null;
};

const Navbar = () => {
    const [activeItem, setActiveItem] = useState("");

    // const { pathname } = useRouter();

    return (
        <nav
            id="nav"
            className="sticky top-0 z-50 text-white bg-gray-800 shadow"
            role="navigation"
        >
            <div className="container flex flex-wrap items-center p-4 mx-auto md:flex-no-wrap">
                <div className="mr-4 md:mr-8">
                    <a href="#" rel="home">
                        <span className="text-xl text-white">Some Site</span>
                    </a>
                </div>
                <div className="ml-auto md:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded"
                        type="button"
                    >
                        <svg
                            className="w-3 h-3 text-white"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path
                                fill="currentColor"
                                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    id="menu"
                    className="w-full h-0 transition-all duration-500 ease-out md:transition-none md:w-auto md:flex-grow md:flex md:items-center"
                >
                    <ul
                        id="ulMenu"
                        className="flex flex-col mx-4 mt-5 duration-300 ease-out sm:transition-none md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0"
                    >
                        <li>
                            <NavItem
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                name="About"
                                route="/"
                            />
                        </li>
                        <li>
                            <NavItem
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                name="Contact"
                                route="/contact"
                            />
                        </li>
                        <li>
                            <NavItem
                                activeItem={activeItem}
                                setActiveItem={setActiveItem}
                                name="Services"
                                route="/services"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
