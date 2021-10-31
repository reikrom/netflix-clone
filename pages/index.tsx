import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import MobileGallery from 'components/menu/MobileGallery/MobileGallery';
import { imgArr } from 'Models/Placeholder';

const Home: NextPage = () => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [counter]);
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MobileGallery title="main page" watchTitles={imgArr} />
        </div>
    );
};

export default Home;
