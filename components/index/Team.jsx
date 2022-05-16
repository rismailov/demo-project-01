import { useState } from 'react';
import TeamMember from './team/TeamMember';
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
        className: 'relative overflow-hidden shadow-lg rounded-lg',
        renderArrowPrev: (clickHandler) => {
            return (
                <button
                    type="button"
                    data-dir="prev"
                    onClick={clickHandler}
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
                    className="p-1 group rounded-full hover:bg-gray-100 active:bg-primary transition-colors"
                >
                    <RiArrowRightCircleLine className="w-7 h-7 text-primary group-active:text-white transition-colors" />
                </button>
            );
        },
    };

    return (
        <section className="py-24">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:justify-items-center lg:flex lg:justify-between lg:space-x-10">
                    {/* Title & Description */}
                    <div className="flex flex-col items-center md:items-start md:max-w-sm">
                        <h3 className="text-center md:text-left font-medium text-primary">
                            The Team behind DigitUX
                        </h3>

                        <h2 className="my-5 text-center md:text-left">
                            A team of creative people excited to help you with your idea
                        </h2>

                        <p className="text-center md:text-left">
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

                    <div className="relative max-w-sm">
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
                            className="hidden lg:block w-50 text-primary"
                            style={{
                                position: 'absolute',
                                right: '-4rem',
                                top: '-4rem',
                                zIndex: '-1',
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
