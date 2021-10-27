import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
    console.log(pageProps, 'pageProps');
    return (
        <>
            <Header />
            <Component {...pageProps} />
            WTF
        </>
    );
}
export default MyApp;
