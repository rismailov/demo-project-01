import Button from '../Button';
import ThemeToggler from '../ThemeToggler';
import notifyAboutDemo from '../../global/notify-about-demo';
import { VscClose } from 'react-icons/vsc';
import { RiMenu3Line } from 'react-icons/ri';

export default function HeaderRight({ showMenu, setShowMenu }) {
    return (
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
    );
}
