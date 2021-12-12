import React, { useState } from 'react';
import { Link } from 'react-navi';
import './header.component.scss';

interface MainHeaderProps {
    appName: string;
}

export function MainHeader({appName}: MainHeaderProps) {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const onClickHandler = () => setMenuVisible(!isMenuVisible);
    const iconVisibilityClass = isMenuVisible ? 'animate' : '';
    const menuVisibilityClass = isMenuVisible ? 'visible' : 'hiddenIfMobile';

    return (
        <nav className="navigation-container">
            <div className="header-logo-and-icon-container">
                <div
                    className="hamburger-icon-container"
                    onClick={onClickHandler}
                >
                    <div
                        className={`hamburger-icon ${iconVisibilityClass}`}
                    ></div>
                </div>
                <div className="product-name-container">
                    <p>{appName}</p>
                </div>
            </div>
            <div className={`navbar-container ${menuVisibilityClass}`}>
                <ul className="navigation-list">
                    <li className="navigation-list-item">
                        <Link onClick={onClickHandler} href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={onClickHandler} href={'/articles'}>
                            Articles
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={onClickHandler} href={'/reports'}>
                            Reports
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={onClickHandler} href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link onClick={onClickHandler} href={'/about-page'}>
                            About page
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}