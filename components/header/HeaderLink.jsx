import Link from 'next/link';
import { useRouter } from 'next/router';

function HeaderLink({ text, href }) {
    const router = useRouter();
    const classes = `header-link | py-0.5
        ${
            router.pathname === href
                ? 'text-l-title dark:text-d-title active'
                : 'text-l-text hover:text-l-title dark:text-d-text dark:hover:text-d-title'
        }
    `;

    return (
        <Link href={href || '/'}>
            <a className={classes}>{text}</a>
        </Link>
    );
}

export default HeaderLink;
