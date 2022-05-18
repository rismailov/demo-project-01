import Link from 'next/link';
import Logo from '../global/Logo';
import Button from '../global/Button';

function FooterLink({ href, title }) {
    return (
        <li>
            <Link href={href}>
                <a className="text-l-text dark:text-d-text hover:text-primary">{title}</a>
            </Link>
        </li>
    );
}

function onSubmit(e) {
    e.preventDefault();

    alert('submitted o_O');
}

export default function Footer() {
    return (
        <footer className="py-20 bg-gradient-to-b from-transparent to-gray-100 dark:to-dark-500">
            <div className="container">
                <div className="footer">
                    {/* About Company */}
                    <div className="footer__section">
                        <div className="footer__section--header">
                            <Logo />
                        </div>

                        <div className="footer__section--body">
                            <p className="pr-3">
                                DigitUx is a digital agency that creates user-centred
                                product which helps it customers to evolve.
                            </p>
                        </div>
                    </div>

                    {/* Menu */}
                    <div className="footer__section">
                        <div className="footer__section--header">
                            <h4 className="font-medium">About</h4>
                        </div>
                        <div className="footer__section--body">
                            <ul className="space-y-2 text-l-text">
                                <FooterLink href="/about-us" title="About Us" />
                                <FooterLink href="/study-case" title="Study Case" />
                                <FooterLink href="/blogs" title="Blogs" />
                                <FooterLink href="/portfolio" title="Portfolio" />
                                <FooterLink href="/careers" title="Careers" />
                            </ul>
                        </div>
                    </div>

                    {/* Socials */}
                    <div className="footer__section">
                        <div className="footer__section--header">
                            <h4 className="font-medium">Follow Us</h4>
                        </div>
                        <div className="footer__section--body">
                            <ul className="space-y-2 text-l-text">
                                <li>
                                    <Link
                                        passHref={true}
                                        href="https://fb.com/DigitallUX"
                                    >
                                        <a
                                            target="_blank"
                                            className="text-l-text dark:text-d-text hover:text-primary"
                                        >
                                            Facebook
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        passHref={true}
                                        href="https://fb.com/DigitallUX"
                                    >
                                        <a
                                            target="_blank"
                                            className="text-l-text dark:text-d-text hover:text-primary"
                                        >
                                            @DigitalUX
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        passHref={true}
                                        href="https://fb.com/DigitallUX"
                                    >
                                        <a
                                            target="_blank"
                                            className="text-l-text dark:text-d-text hover:text-primary"
                                        >
                                            @DigitalUX
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <a
                                        href="fb.com/DigitallUX"
                                        className="text-l-text dark:text-d-text hover:text-primary"
                                    >
                                        dribbble.com/DigitalUx
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Contacts */}
                    <div className="footer__section">
                        <div className="footer__section--header">
                            <h4 className="font-medium">Get In touch with Us</h4>
                        </div>
                        <div className="footer__section--body">
                            <form onSubmit={(e) => onSubmit(e)}>
                                <label
                                    htmlFor="email"
                                    className="text-l-text dark:text-d-text"
                                >
                                    Need help? Just e-mail us!
                                </label>

                                <input
                                    type="email"
                                    placeholder="Your e-mail"
                                    className="mt-3 w-full text-sm outline-none rounded-sm dark:bg-d-bg dark:text-d-title"
                                />

                                <Button
                                    type="submit"
                                    className="mt-4 w-full py-3 btn btn-sm btn-primary"
                                >
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
