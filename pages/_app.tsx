import React from 'react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import TouchHeader from 'components/touch-header';
import Header from 'components/header';
import { isMobile, isTablet } from 'react-device-detect';

function MyApp({ Component, pageProps }: AppProps) {
    if (isMobile || isTablet) {
        return (
            <>
                <TouchHeader />
                <div style={{ padding: '0 4%' }} className="mt-16 md:mt-24">
                    <Component {...pageProps} />
                </div>
            </>
        );
    } else
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
