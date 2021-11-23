import './header.component.scss';

interface HeaderProps {
    appName: string;
}

export function Header({appName}: HeaderProps) {
    return <div className='abc'>hello header</div>
}
