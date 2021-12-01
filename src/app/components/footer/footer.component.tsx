import './footer.component.scss';

interface FooterProps {
    aboutPageInfo: string;
    usedAPI: string;
}

export function Footer({ aboutPageInfo, usedAPI }: FooterProps) {
    return (
        <div className="footer-container">
            <div className="info-container">{aboutPageInfo}</div>
            <div className="used-api-container">{usedAPI}</div>
        </div>
    );
}
