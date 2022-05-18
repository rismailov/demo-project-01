import Layout from '../components/Layout';
import 'windi.css';
import '../styles/windi.css';
import '../styles/app.scss';
import Script from 'next/script';
import Head from 'next/head';
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        aos.init({ once: true });
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="description"
                    content="This is a demo project made by Rasul for portfolio."
                />
            </Head>

            {/* Add tailwind class to avoid page flickering */}
            <Script src="/theme.js" strategy="beforeInteractive" />

            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
