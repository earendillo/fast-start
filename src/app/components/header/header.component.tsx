import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-navi';
import './header.component.scss';

interface HeaderProps {
    appName: string;
}

function NavBar(props: any) {
    const menuVisibility = false;
    const [isMenuVisible, setMenuVisible] = useState(menuVisibility);
    const handleMenuVisibility = () => setMenuVisible(!isMenuVisible);
    const icon = isMenuVisible ? (
        <FontAwesomeIcon icon={faTimes} />
    ) : (
        <FontAwesomeIcon icon={faBars} />
    );
    const visibilityClass = isMenuVisible ? 'visible' : 'hiddenIfMobile';

    return (
        <nav className="navigation-container">
            <div className="hamburger-icon-container">
                <button onClick={handleMenuVisibility}>{icon}</button>
            </div>
            <div className={`navbar-container ${visibilityClass}`}>
                <ul className="navigation-list">
                    <li className="navigation-list-item">
                        <Link onClick={handleMenuVisibility} href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={handleMenuVisibility} href={'/articles'}>
                            Articles
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={handleMenuVisibility} href={'/reports'}>
                            Reports
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={handleMenuVisibility} href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link
                            onClick={handleMenuVisibility}
                            href={'/about-page'}
                        >
                            About page
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export function MainHeader({ appName }: HeaderProps) {
    return (
        <div className="header-container">
            <div className="header-logo-and-icon-container">
                <div className="product-name-container">
                    <p>{appName}</p>
                </div>
            </div>
            <NavBar />
        </div>
    );
}
