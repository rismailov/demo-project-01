import Button from './../global/Button';
import { MdChatBubbleOutline, MdArrowForward } from 'react-icons/md';
import HelloArrow from '../sprites/index/hero/HelloArrow';
import Star from '../sprites/index/hero/Star';
import Image from 'next/image';
import Badge from './hero/Badge';
import DesignDots from '../sprites/DesignDots';

export default function Hero() {
    return (
        <section className="relative h-screen w-screen">
            <div className="container">
                <div className="w-full h-full flex items-center justify-center lg:justify-between">
                    {/* left block */}
                    <div className="relative">
                        <HelloArrow />

                        <h6 className="mb-3 text-xl font-bold text-primary">Hello,</h6>

                        <h1 className="max-w-lg">
                            We Help People Bring Their Ideas To Life
                        </h1>

                        <p className="mt-5 mb-12 text-lg">
                            A talented team to help you in your journey on creating
                            <br />
                            useful and easy to use product.
                            <br />
                            <br />
                            Available 24/7
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
                                className="flex items-center justify-center xs:justify-start group"
                            >
                                Check out Services
                                <MdArrowForward className="w-5 h-5 mt-0.5 ml-2 text-primary transform group-hover:translate-x-2 transition-transform duration-150" />
                            </button>
                        </div>
                    </div>

                    {/* right block */}
                    <div className="hidden lg:block relative">
                        <div className="w-full h-full relative z-20">
                            <Badge
                                emoji="🔎"
                                text="UI/UX Designer"
                                style={{
                                    position: 'absolute',
                                    top: '100px',
                                }}
                            />
                            <Badge
                                emoji="🔀"
                                text="Flow charts"
                                style={{
                                    position: 'absolute',
                                    top: '200px',
                                    right: '-50px',
                                }}
                            />
                            <Badge
                                emoji="🔔"
                                text="Icons"
                                style={{
                                    position: 'absolute',
                                    top: '450px',
                                    left: '20px',
                                }}
                            />
                            <Badge
                                emoji="🎨"
                                text="UI Kit"
                                style={{
                                    position: 'absolute',
                                    top: '375px',
                                    left: '350px',
                                }}
                            />
                        </div>

                        <div className="w-full h-full relative z-10 pr-20">
                            <Star />

                            <Image
                                priority={true}
                                src="/images/hero-person.png"
                                layout="fixed"
                                width={400}
                                height={450}
                            />
                        </div>

                        <DesignDots
                            className="w-full max-w-sm text-primary"
                            style={{ position: 'absolute', left: '150px', top: '150px' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
