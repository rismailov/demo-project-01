import Button from './../global/Button';
import { MdChatBubbleOutline, MdArrowForward } from 'react-icons/md';

export default function Hero() {
    return (
        <section className="h-full pt-20 bg-l-bg dark:bg-d-bg" style={{ minHeight: '50vh' }}>
            <div
                className="max-w-xl container h-full flex flex-col items-center justify-center"
                style={{ minHeight: 'inherit' }}
            >
                <h4 className="mb-5 text-center text-primary font-bold">About Us</h4>

                <h1 className="mb-7 text-center">What we do</h1>

                <p className="mb-10 text-center leading-relaxed">
                    DigitUx is a Digital agency founded 2022, that create user centered
                    product that help her client to evolve ,our core idealogy is
                    perfection, our goal is to make usefull and easy to use products And
                    help people to grow their businesses.
                </p>

                <div className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-7 item-center">
                    <Button className="btn btn-primary btn-md">
                        <div className="flex items-center justify-center xs:justify-start">
                            Let&apos;s Talk
                            <MdChatBubbleOutline className="ml-3 w-5 h-5" />
                        </div>
                    </Button>

                    <button
                        type="button"
                        className="flex items-center justify-center xs:justify-start group dark:text-d-title"
                    >
                        Check out Services
                        <MdArrowForward className="w-5 h-5 mt-0.5 ml-2 text-primary transform group-hover:translate-x-2 transition-transform duration-150" />
                    </button>
                </div>
            </div>
        </section>
    );
}
