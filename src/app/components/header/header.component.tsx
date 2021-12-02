import React, { useState } from 'react';
import { Link } from 'react-navi';
import './header.component.scss';

interface HeaderProps {
    appName: string;
}

// interface NavBarProps {
//     // isNavBarOpen: boolean;
// }

// function NavBar({ isNavBarOpen }: NavBarProps) {
function NavBar(props: any) {
    const [isNavBarOpen, setNavBarOpen] = useState(false);
    const handleHamburgerMenu = () => {
        setNavBarOpen(!isNavBarOpen);
    }
    const setClassActive = () => {
        let classes = "nav-links";
        // return isNavBarOpen ? classes += " active" : classes;
        if (isNavBarOpen) {
            return classes += " active";
        }
        return classes;
    }
    return (
        // <div className="navbar-container">
        <nav className="navigation-container">
            {/* <button onClick={handleToggle}>{isNavBarOpen ? 'Close' : 'Open'}</button> */}

            {/* <div className='logo'>
                    {/* <i className='fas fa-mountain'></i> */}
            {/* </div> */}
            <ul className={setClassActive()}>
                {/* <ul className={`navigation-list ${isNavBarOpen && "showMenu"}`}> */}
                <li className="nav-link">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="nav-link">
                    <Link href={'/articles'}>Articles</Link>
                </li>
                <li className="nav-link">
                    <Link href={'/reports'}>Reports</Link>
                </li>
                <li className="nav-link">
                    <Link href={'/blogs'}>Blogs</Link>
                </li>
                <li className="nav-link">
                    <Link href={'/about-page'}>About page</Link>
                </li>
            </ul>
            <div>
                <button onClick={handleHamburgerMenu} className="hamburgerToggle">{'≡/×'}</button>
            </div>
        </nav>
        // {/* <main>{props.children || null}</main> */}
        // </div>
    );
}

export function MainHeader({ appName }: HeaderProps) {
    return (
        <div className="header-container">
            <div className="product-name-container">
                <p>{appName}</p>
            </div>
            {/* <div>
                <a href='' className="icon" onClick={'showHamburgerMenu()'}>
                    <i className="fa fa-bars"></i>
                </a>
            </div> */}
            <NavBar />
        </div>
    );
}
