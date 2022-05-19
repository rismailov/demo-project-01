import HeaderLink from '../../header/HeaderLink';

export default function Mobile({ menuItems, showMenu }) {
    return (
        <div
            id="headerBurgerNav"
            className={`bg-white dark:bg-d-bg border-y border-gray-200 dark:border-dark-50 shadow-xl ${
                showMenu ? 'active' : ''
            }`}
        >
            <div className="container">
                <ul className="space-y-3 text-sm">
                    {menuItems.map(({ title, url }) => {
                        return (
                            <li
                                key={title}
                                onClick={() => setTimeout(setShowMenu(false), 150)}
                            >
                                <HeaderLink text={title} href={url} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
