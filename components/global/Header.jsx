import { useState, useEffect, useRef } from 'react';
import { useWindowSize, useClickAway } from 'react-use';
import HeaderRight from './Header/HeaderRight';
import Desktop from './Header/Desktop';
import Mobile from './Header/Mobile';

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
        if (width > 1024 && showMenu) setShowMenu(false);
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
                <Desktop menuItems={MENU_ITEMS} />

                <HeaderRight showMenu={showMenu} setShowMenu={setShowMenu} />
            </div>

            {/* burger menu */}
            <Mobile menuItems={MENU_ITEMS} showMenu={showMenu} />
        </header>
    );
}
