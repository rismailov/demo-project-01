import Head from 'next/head';
import Hero from '../components/services/Hero';
import Process from '../components/services/Process';

export default function services() {
    return (
        <>
            <Head>
                <title>Services - Company</title>
            </Head>

            <Hero />
            <Process />
        </>
    );
}
