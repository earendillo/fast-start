import { NavBar } from '../../app';
import './header.component.scss';

interface HeaderProps {
    appName: string;
}

export function MainHeader({ appName }: HeaderProps) {
    return (
        <div className="header-container">
            <div className="product-name-container">
                <p>{appName}</p>
            </div>
            <NavBar />
        </div>
    );
}
