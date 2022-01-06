import React, { useState } from 'react';
import { Link } from 'react-navi';
import rocket from '../../images/rocket.svg';
import './header.component.scss';

interface MainHeaderProps {
    appName: string;
}

export function MainHeader({ appName }: MainHeaderProps) {
    const [isMenuVisible, setMenuVisible] = useState(false);
    const handleClick = () => setMenuVisible(!isMenuVisible);
    const iconVisibilityClass = isMenuVisible ? 'animate' : '';
    const menuVisibilityClass = isMenuVisible ? '' : 'hiddenIfMobile';

    return (
        <nav className="menu-items">
            <div className="header">
                <div
                    className="hamburger-icon-container"
                    onClick={handleClick}
                >
                    <div
                        className={`hamburger-icon ${iconVisibilityClass}`}
                    ></div>
                </div>

                {/* source of free rocket svg: https://pixabay.com/pl/vectors/okr%c4%99t-rakietowy-statek-kosmiczny-303591/ */}

                <div className="product-name-container">
                    <img className="logo" src={rocket} alt="White rocket that rotates on hover" />
                    <p>{appName}</p>
                </div>
            </div>
            <ul className={`nav ${menuVisibilityClass}`}>
                    <li className="nav-item">
                        <Link onClick={handleClick} href={'/'}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleClick} href={'/articles'}>
                            Articles
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleClick} href={'/reports'}>
                            Reports
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={handleClick} href={'/blogs'}>
                            Blogs
                        </Link>
                    </li>
                </ul>
        </nav>
    );
}
