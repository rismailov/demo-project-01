import Head from 'next/head';
import Faq from '../components/contacts/Faq';
import Hero from '../components/contacts/Hero';

export default function contacts() {
    return (
        <>
            <Head>
                <title>Contacts - Company</title>
            </Head>

            <Hero />
            <Faq />
        </>
    );
}
