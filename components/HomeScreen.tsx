import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Typewriter from "./Typewriter";
import Footer from "./Footer";
import Navbar from "./Navbar";

const HomeScreen: React.FC = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoaded(true);
        }, 2000);
    }, []);

    return (
        <>
            <Head>
                <title>Loading Screen</title>
            </Head>

            {/* TODO: uncomment, delete Home */}
            {/* {!isLoaded && (
                <div className="flex items-center justify-center w-full h-screen">
                    <Typewriter text="Loading" />
                </div>
            )}
            {isLoaded && <Home />} */}
            <Home />
        </>
    );
};

const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Home Page</title>
            </Head>
            <Navbar />
            <div className="flex items-center justify-center w-full h-screen">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome to my website!
                </h1>
            </div>
            <Footer />
        </>
    );
};

export default HomeScreen;
