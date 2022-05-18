import Layout from '../components/Layout';
import 'windi.css';
import '../styles/windi.css';
import '../styles/app.scss';
import Script from 'next/script';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
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
