import { Box } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import PlausibleProvider from 'next-plausible';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <PlausibleProvider domain="mei-games.com">
            <div className='layout'>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#51279b" />
                    <meta name="msapplication-TileColor" content="#603cba" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>
                <main>
                    <Box sx={{ margin: 5 }}>
                        {children}
                    </Box>
                </main>
            </div>
        </PlausibleProvider >
    )
}

export default Layout;