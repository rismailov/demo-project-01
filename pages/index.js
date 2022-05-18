import Head from 'next/head';
import Clients from '../components/index/Clients';
import Hero from '../components/index/Hero';
import Services from '../components/index/Services';
import Team from '../components/index/Team';
import Testimonials from '../components/index/Testimonials';
import Work from '../components/index/Work';

export default function Home() {
    return (
        <>
            <Head>
                <title>Home - Company</title>
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>

            <div className="wrapper">
                <Hero />
                <Clients />
                <Services />
                <Team />
                <Work />
                <Testimonials />
            </div>
        </>
    );
}
