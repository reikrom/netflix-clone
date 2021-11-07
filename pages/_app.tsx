import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from 'components/header/Header';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <div style={{ padding: '0 4%' }} className="mt-16 md:mt-24">
                <Component {...pageProps} />
            </div>
        </>
    );
}
export default MyApp;
