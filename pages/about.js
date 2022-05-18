import Head from 'next/head';
import Hero from '../components/about/Hero';
import Team from '../components/about/Team';
import Testimonials from '../components/index/Testimonials';

export default function about() {
    return (
        <>
            <Head>
                <title>About - Company</title>
            </Head>

            <Hero />
            <Team />
            <Testimonials />
        </>
    );
}
