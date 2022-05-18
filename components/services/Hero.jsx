import Button from './../global/Button';
import { MdChatBubbleOutline, MdArrowForward } from 'react-icons/md';

export default function Hero() {
    return (
        <section
            className="h-full pt-20 bg-l-bg dark:bg-d-bg"
            style={{ minHeight: '50vh' }}
        >
            <div
                className="max-w-xl container h-full flex flex-col items-center justify-center"
                style={{ minHeight: 'inherit' }}
            >
                <h4 className="mb-5 text-center text-primary font-bold" data-aos="a-fade">
                    Our Services
                </h4>

                <h1 className="mb-7 text-center" data-aos="a-fade" data-aos-delay="100">
                    Services We Offer
                </h1>

                <p
                    className="mb-10 text-center leading-relaxed"
                    data-aos="a-fade"
                    data-aos-delay="200"
                >
                    With our awesome team we offer a variety of services from UI/UX design
                    to video productions. Our goal is to help you on your road to create
                    your product.
                </p>

                <div
                    className="flex flex-col space-y-4 xs:flex-row xs:space-y-0 xs:space-x-7 item-center"
                    data-aos="a-fade"
                    data-aos-delay="300"
                >
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
                        Check out Projects
                        <MdArrowForward className="w-5 h-5 mt-0.5 ml-2 text-primary transform group-hover:translate-x-2 transition-transform duration-150" />
                    </button>
                </div>
            </div>
        </section>
    );
}
