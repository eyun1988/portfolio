import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import HomeScreen from "../components/HomeScreen";

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
