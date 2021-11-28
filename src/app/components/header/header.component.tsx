import { NavBar } from '../../app';
import './header.component.scss';

interface HeaderProps {
    appName: string;
}

function Header({ appName }: HeaderProps) {
    return (
        <div className="product-name-item">
            <p>{appName}</p>
        </div>
    );
}

export function HeaderComponent() {
    return (
        <div className="header-container">
            <div className="product-name-container">
                <Header appName="Product name - change me" />
            </div>
            <NavBar />
        </div>
    );
}
