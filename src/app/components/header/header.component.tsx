import { Link } from 'react-navi';
import './header.component.scss';

interface HeaderProps {
    appName: string;
}

function NavBar(props: any) {
    return (
        <nav className="navigation-container">
            <ul className="navigation-list">
                <li className="navigation-list-item">
                    <Link href={'/'}>Home</Link>
                </li>
                <li className="navigation-list-item">
                    <Link href={'/articles'}>Articles</Link>
                </li>
                <li className="navigation-list-item">
                    <Link href={'/reports'}>Reports</Link>
                </li>
                <li className="navigation-list-item">
                    <Link href={'/blogs'}>Blogs</Link>
                </li>
                <li className="navigation-list-item">
                    <Link href={'/about-page'}>About page</Link>
                </li>
            </ul>
        </nav>
    );
}

export function MainHeader({ appName }: HeaderProps) {
    return (
        <div className="header-container">
            <div className="header-logo-and-icon-container">
                <div className="product-name-container">
                    <p>{ appName }</p>
                </div>
                <div className="hamburger-icon-container">
                    <button>≡×</button>
                </div>
            </div>
            <NavBar />
        </div>
    );
}
