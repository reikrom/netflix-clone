import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { imgArr20 } from 'Models/Placeholder';
import SingleRow from 'components/SingleRow';
import { genres } from 'utils/routes';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {genres.map((genre) => (
                <SingleRow key={genre.id} title={genre.title} watchTitles={imgArr20} />
            ))}
        </div>
    );
};

export default Home;
