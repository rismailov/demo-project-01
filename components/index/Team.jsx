import { useState } from 'react';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { RiArrowLeftCircleLine, RiArrowRightCircleLine } from 'react-icons/ri';
import DesignDots from './../sprites/DesignDots';

const TEAM_MEMBERS = [
    {
        id: 0,
        name: 'Jamila Smail',
        position: 'Co-Founder',
        url: '/images/team/team_member_01.jpg',
    },
    {
        id: 1,
        name: 'Anna Shvets',
        position: 'Creative Designer',
        url: '/images/team/team_member_02.jpg',
    },
    {
        id: 2,
        name: 'Julia Smith',
        position: 'Co-Founder',
        url: '/images/team/team_member_03.jpg',
    },
];
export default function Team() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
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
        className: 'relative max-w-sm overflow-hidden shadow-lg rounded-lg z-10',
        renderArrowPrev: (clickHandler) => {
            return (
                <button
                    type="button"
                    data-dir="prev"
                    onClick={clickHandler}
                    aria-label="Previous Slide"
                    className="p-1 group rounded-full hover:bg-gray-100 active:bg-primary transition-colors"
                >
                    <RiArrowLeftCircleLine className="w-7 h-7 text-primary group-active:text-white transition-colors" />
                </button>
            );
        },
        renderArrowNext: (clickHandler) => {
            return (
                <button
                    type="button"
                    data-dir="next"
                    onClick={clickHandler}
                    aria-label="Next Slide"
                    className="p-1 group rounded-full hover:bg-gray-100 active:bg-primary transition-colors"
                >
                    <RiArrowRightCircleLine className="w-7 h-7 text-primary group-active:text-white transition-colors" />
                </button>
            );
        },
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#363795] to-[#005C97]">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:justify-items-center lg:flex lg:space-x-10">
                    {/* Title & Description */}
                    <div className="flex flex-col items-center md:items-start md:max-w-sm">
                        <h3 className="text-primary text-center md:text-left font-normal">
                            The Team behind DigitUX
                        </h3>

                        <h1 className="my-5 text-center md:text-left text-white">
                            A team of creative people excited to help you with your idea
                        </h1>

                        <p className="text-center md:text-left text-gray-300">
                            Our team of digital product creators and Tch Bring Skilled
                            will take your idea to the next level and help you with your
                            product.
                        </p>

                        <button
                            type="button"
                            className="mt-7 btn btn-md px-10 btn-primary"
                        >
                            Join Us
                        </button>
                    </div>

                    <div className="relative flex-1 flex items-center justify-center">
                        {/* Team Member Slider */}
                        <Carousel {...carouselProps}>
                            {TEAM_MEMBERS.map((member) => (
                                <TeamMember
                                    key={member.id}
                                    name={member.name}
                                    position={member.position}
                                    url={member.url}
                                />
                            ))}
                        </Carousel>

                        <DesignDots
                            className="hidden lg:block w-75 text-white"
                            style={{
                                position: 'absolute',
                                right: '0rem',
                                top: '-4rem',
                                zIndex: '1',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

function TeamMember({ name, position, url }) {
    return (
        <>
            <div className="w-full max-w-sm h-80 relative">
                {url && (
                    <Image
                        src={url}
                        alt={`Team member: ${name}`}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                )}
            </div>

            {/* team member description */}
            <div className="flex flex-col items-start p-3 bg-white dark:bg-d-bg">
                <h4 className="mb-1 font-bold">{name}</h4>
                <h6 className="text-l-text dark:text-d-text text-sm">{position}</h6>
            </div>
        </>
    );
}
