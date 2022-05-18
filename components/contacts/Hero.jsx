import Wave from '../sprites/contacts/Wave';
import ContactForm from './ContactForm';

export default function Hero() {
    return (
        <section className="h-full relative overflow-hidden pt-30 pb-20 dark:bg-d-bg">
            <Wave />

            <div
                className="relative z-10 max-w-xl container h-full flex flex-col items-center"
                style={{ minHeight: 'inherit' }}
            >
                <h3 className="mb-5 text-primary text-center">Let&apos;s have a chat</h3>

                <h1 className="text-center">An Expert At Your Services</h1>

                <ContactForm />
            </div>
        </section>
    );
}
