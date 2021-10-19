import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import AnimatedCounterExample from '../components/AnimatedCounterExample';
import Header from 'components/header/Header';

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
        <div className={(styles.container, '')}>
            <Header />
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Welcome to <a href="https://nextjs.org">Next.js!</a>
                </h1>
                <div className="my-10">
                    <AnimatedCounterExample counter={counter} />
                </div>
            </main>

            {/* <footer className={(styles.footer, 'bg-light-3 py-10 text-center ')}>this is a footer</footer> */}
        </div>
    );
};

export default Home;
