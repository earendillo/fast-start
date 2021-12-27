import React, { useState } from 'react';
import { Link } from 'react-navi';
import rocket from '../../images/rocket.svg';
import './header.component.scss';

interface MainHeaderProps {
    appName: string;
}

export function MainHeader({ appName }: MainHeaderProps) {
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

                {/* source of free rocket svg: https://pixabay.com/pl/vectors/okr%c4%99t-rakietowy-statek-kosmiczny-303591/ */}

                <div className="product-name-container">
                    <img className="logo" src={rocket} alt="rocket logo" />
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
                </ul>
            </div>
        </nav>
    );
}
