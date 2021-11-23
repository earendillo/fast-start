import './header.styles.css';


interface HeaderProps {
    appName: string;
}

export function Header({appName}: HeaderProps) {
    return <div>hello header</div>
}