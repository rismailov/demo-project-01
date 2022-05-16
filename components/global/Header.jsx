import Logo from './Logo';
import Button from './Button';
import HeaderLink from '../header/HeaderLink';
import { RiMenu3Line } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';
import { useState, useEffect, useRef } from 'react';
import { useWindowScroll, useWindowSize, useClickAway } from 'react-use';

const MENU_ITEMS = [
    { title: 'Home', url: '/' },
    { title: 'Who we are?', url: '/about-us' },
    { title: 'Our Services', url: '/our-services' },
    { title: 'Our Projects', url: '/our-projects' },
    { title: 'Contact Us', url: '/contact-us' },
];

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const { width } = useWindowSize();
    const { y } = useWindowScroll();
    const headerRef = useRef(null);

    // close nav menu on window resize
    useEffect(() => {
        if (width > 670 && showMenu) {
            setShowMenu(false);
        }
    }, [width]);

    // track scroll distance
    useEffect(() => {
        setIsHeaderActive(y > 66);
    }, [y]);

    // close nav menu on click away
    useClickAway(headerRef, () => {
        if (showMenu) {
            setShowMenu(false);
        }
    });

    return (
        <header
            ref={headerRef}
            style={{ height: '75px' }}
            className={`fixed z-30 top-0 left-0 right-0 transition-all duration-300 ${
                isHeaderActive
                    ? 'bg-l-bg dark:bg-d-bg shadow-md border-b border-gray-100'
                    : ''
            }`}
        >
            <div className="flex items-center justify-between container">
                <Logo />

                <nav className="hidden lg:block">
                    <ul className="flex items-center space-x-5">
                        {MENU_ITEMS.map(({ title, url }) => {
                            return (
                                <li key={title}>
                                    <HeaderLink text={title} href={url} />
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center space-x-5">
                    <Button className="hidden sm:block btn btn-primary btn-sm md:btn-md">
                        Get A Quote
                    </Button>

                    <button
                        type="button"
                        onClick={() => setShowMenu((prev) => !prev)}
                        className="lg:hidden flex items-center justify-center p-2"
                    >
                        {showMenu ? (
                            <VscClose className="w-5 h-5 text-l-text dark:text-d-text" />
                        ) : (
                            <RiMenu3Line className="w-5 h-5 text-l-text dark:text-d-text" />
                        )}
                    </button>
                </div>
            </div>

            {/* burger menu */}
            <div
                id="headerBurgerNav"
                className={`border-b border-t border-gray-200 shadow-xl ${
                    showMenu ? 'active' : ''
                }`}
            >
                <div className="container">
                    <ul className="space-y-3 text-sm">
                        {MENU_ITEMS.map(({ title, url }) => {
                            return (
                                <li key={title}>
                                    <HeaderLink text={title} href={url} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </header>
    );
}
