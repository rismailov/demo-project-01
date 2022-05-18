import Image from 'next/image';
import { MdChevronRight } from 'react-icons/md';
import notifyAboutDemo from '../global/notify-about-demo';

function WorkExample({ title, desc, imageSrc, rootElClass, ...aos }) {
    return (
        <button type="button" onClick={notifyAboutDemo} className={rootElClass} {...aos}>
            {/* {imageSrc && ( */}
            <div className="relative w-full h-full rounded-md overflow-hidden shadow-lg mb-3">
                <Image
                    src={imageSrc}
                    layout="fill"
                    objectFit="cover"
                    alt={`work example: ${desc}`}
                />
            </div>
            {/* )} */}

            <h5 className="text-primary">{title}</h5>

            <h6 className="font-normal text-l-text dark:text-d-text">{desc}</h6>
        </button>
    );
}

export default function Work() {
    return (
        <section className="py-20">
            <div className="container">
                <div className="flex flex-col">
                    <h3 className="text-primary font-medium" data-aos="a-fade">
                        The work we realised
                    </h3>

                    <h2
                        className="mt-3 mb-7 max-w-md"
                        data-aos="a-fade"
                        data-aos-delay="100"
                    >
                        The work we did that made our clients happy
                    </h2>

                    <div className="index-work-grid">
                        <WorkExample
                            title="UI/UX"
                            desc="Delex Relay"
                            imageSrc="/images/work/01.png"
                            rootElClass="index-work-grid--item"
                            data-aos="a-fade"
                        />
                        <WorkExample
                            title="Web/App Development"
                            desc="Cooke Me"
                            imageSrc="/images/work/02.png"
                            rootElClass="index-work-grid--item"
                            data-aos="a-fade"
                            data-aos-delay="100"
                        />
                        <WorkExample
                            title="UI/UX Design"
                            desc="ADOC"
                            imageSrc="/images/work/05.png"
                            rootElClass="index-work-grid--item index-work-grid--item-big"
                            data-aos="a-fade"
                            data-aos-delay="200"
                        />
                        <WorkExample
                            title="UI/UX Design"
                            desc="Booking.com"
                            imageSrc="/images/work/03.png"
                            rootElClass="index-work-grid--item"
                            data-aos="a-fade"
                            data-aos-delay="300"
                        />
                        <WorkExample
                            title="UI/UX Design"
                            desc="Homely"
                            imageSrc="/images/work/04.png"
                            rootElClass="index-work-grid--item"
                            data-aos="a-fade"
                            data-aos-delay="400"
                        />
                    </div>

                    <div className="flex items-center justify-center mt-7 pt-7">
                        <button
                            type="button"
                            onClick={notifyAboutDemo}
                            className="py-2 px-5 rounded-md text-primary flex items-center border-2 border-primary group transition-colors hover:text-l-text dark:hover:text-d-text hover:border-l-text dark:hover:border-d-text text-sm font-medium"
                            data-aos="a-fade"
                            data-aos-duration="750"
                        >
                            Explore More Projects
                            <MdChevronRight className="w-6 h-6 ml-2 mt-0.25 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
