import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Typewriter from "./Typewriter";

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
                <div className="flex items-center justify-center h-screen">
                    <div className="p-6">
                        <Typewriter text="Loading" />
                    </div>
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
            {/* make main content */}
            <div className="flex items-center justify-center w-full">
                <h1 className="text-3xl font-bold text-gray-800">
                    Welcome to my website!
                </h1>
            </div>
        </>
    );
};

export default HomeScreen;
