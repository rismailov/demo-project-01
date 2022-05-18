import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const TESTIMONIALS = [
    {
        id: 0,
        name: 'Djamila Malak',
        position: 'Co-Founder RobaKabyle',
        text: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
        imageSrc: '/images/testimonials/01.png',
    },
    {
        id: 1,
        name: 'Smail Yefsah',
        position: 'CEO Innova',
        text: 'Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product',
        imageSrc: '/images/testimonials/02.png',
    },
];

const carouselProps = {
    showArrows: false,
    showIndicators: false,
    showThumbs: false,
    showStatus: false,
    infiniteLoop: true,
    autoPlay: true,
    transitionTime: 500,
    stopOnHover: true,
    showArrows: true,
    emulateTouch: true,
    className: 'py-14 px-8 rounded-md bg-white dark:bg-d-bg shadow-md max-w-2xl mx-auto',
};

function Testimonial({ text, name, position, imageSrc, ...aos }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-7" {...aos}>
            <p className="max-w-lg text-center">{text}</p>

            <div className="flex items-center space-x-5">
                <div className="relative w-18 h-18 rounded-full overflow-hidden">
                    <Image src={imageSrc} layout="fill" alt={`team member: ${name}`} />
                </div>

                <div className="flex flex-col items-start">
                    <h6 className="font-bold">{name}</h6>
                    <h6 className="text-l-text dark:text-d-text">{position}</h6>
                </div>
            </div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-200/60 dark:bg-gray-300/5">
            <div className="container">
                <div>
                    <h3
                        className="font-normal text-center text-primary"
                        data-aos="fade"
                        data-aos-duration="750"
                    >
                        Testimonials
                    </h3>

                    <h2
                        className="text-center mt-3 mb-12"
                        data-aos="fade"
                        data-aos-duration="750"
                        data-aos-delay="150"
                    >
                        Still hesitating working with us?
                        <br />
                        See what people say
                    </h2>

                    <Carousel {...carouselProps}>
                        {TESTIMONIALS.map((testimonial, i) => (
                            <Testimonial
                                key={testimonial.id}
                                {...testimonial}
                                data-aos="fade-in"
                                data-aos-delay={i * 100}
                            />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
