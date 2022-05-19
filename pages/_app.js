import Layout from '../components/Layout';
import 'windi.css';
import '../styles/windi.css';
import '../styles/app.scss';
import Head from 'next/head';
import Script from 'next/script';
import { useEffect } from 'react';
import aos from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTheme from '../hooks/useTheme';

function MyApp({ Component, pageProps }) {
    const [theme] = useTheme();

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
                <ToastContainer newestOnTop theme={theme} />

                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
