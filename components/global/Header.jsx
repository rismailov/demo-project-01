import Logo from './Logo';
import Button from './Button';
import HeaderLink from '../header/HeaderLink';
import { RiMenu3Line } from 'react-icons/ri';
import { VscClose } from 'react-icons/vsc';
import { useState, useEffect, useRef } from 'react';
import { useWindowSize, useClickAway } from 'react-use';
import notifyAboutDemo from '../global/notify-about-demo';
import ThemeToggler from './ThemeToggler';
import Link from 'next/link';

const MENU_ITEMS = [
    { title: 'Home', url: '/' },
    { title: 'Who we are?', url: '/about' },
    { title: 'Our Services', url: '/services' },
    { title: 'Contact Us', url: '/contacts' },
];

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const { width } = useWindowSize();
    const headerRef = useRef(null);

    // close nav menu on window resize
    useEffect(() => {
        if (width > 670 && showMenu) setShowMenu(false);
    }, [width, showMenu]);

    // close nav menu on click away
    useClickAway(headerRef, () => showMenu && setShowMenu(false));

    return (
        <header
            ref={headerRef}
            style={{ height: '75px' }}
            className="fixed z-30 top-0 left-0 right-0 bg-l-bg dark:bg-d-bg"
        >
            <div className="flex items-center justify-between container">
                <Link href="/" aria-label="Go to home page" alt="Go to home page">
                    <a className="hover:opacity-80">
                        <Logo />
                    </a>
                </Link>

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
                    <ThemeToggler />

                    <Button
                        onClick={notifyAboutDemo}
                        className="hidden sm:block btn btn-primary btn-sm md:btn-md"
                    >
                        Get A Quote
                    </Button>

                    <button
                        type="button"
                        onClick={() => setShowMenu((prev) => !prev)}
                        className="lg:hidden flex items-center justify-center p-2"
                        aria-label="Show Navigation Menu"
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
                className={`bg-white dark:bg-d-bg border-y border-gray-200 dark:border-dark-50 shadow-xl ${
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
