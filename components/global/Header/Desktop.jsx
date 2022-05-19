import Link from 'next/link';
import Logo from '../Logo';
import HeaderLink from '../../header/HeaderLink';

export default function Desktop({ menuItems }) {
    return (
        <>
            <Link href="/" aria-label="Go to home page" alt="Go to home page">
                <a className="hover:opacity-80">
                    <Logo />
                </a>
            </Link>

            <nav className="hidden lg:block">
                <ul className="flex items-center space-x-5">
                    {menuItems.map(({ title, url }) => {
                        return (
                            <li key={title}>
                                <HeaderLink text={title} href={url} />
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
}
