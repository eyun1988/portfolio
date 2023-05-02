import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

// convert this later to tailwind

import HomeScreen from "../components/HomeScreen";

/**
 * Set all imports for the layout of the projects here
 * import NavBar from ./navbar
 */

const Home: React.FC = () => {
    return (
        <div>
            <Head>
                <title>Eddy&apos;s Portfolio</title>
                <meta name="description" content="My Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeScreen />
        </div>
    );
};

export default Home;
