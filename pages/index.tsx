import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { imgArr20 } from 'Models/Placeholder';
import SingleRow from 'components/SingleRow';

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

            {imgArr20.map((index) => (
                <SingleRow key={index} title={`Title ${index + 1}`} watchTitles={imgArr20} />
            ))}
        </div>
    );
};

export default Home;
